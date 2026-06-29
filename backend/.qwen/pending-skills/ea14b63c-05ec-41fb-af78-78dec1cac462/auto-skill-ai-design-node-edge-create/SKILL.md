---
name: ai-design-node-edge-create
description: When persisting AI-generated system designs, do NOT pass `id` on nested Node/Edge creates inside `prisma.design.create` — pass only `flowId`. The AI emits hardcoded Reactflow ids that collide across reruns.
source: auto-skill
extracted_at: '2026-06-29T15:10:33.570Z'
---

# AI-generated Node/Edge inserts: only `flowId`, never `id`

## Symptom

After a successful first run of the AI design generator, the second run with the same prompt fails:

```
PrismaClientKnownRequestError:
Invalid `prisma.design.create()` invocation
Unique constraint failed on the fields: (`id`)
  meta: { modelName: 'Design', target: ['id'] }
```

The error misleadingly reports `modelName: 'Design'`, but the actual conflict is on the nested `Node` or `Edge` `id` column. (The trace points at the top-level `design.create` call, but the offending row is one level down.)

## Why this happens

The system-design prompt asks the AI to emit Reactflow-shaped objects like:

```json
{ "id": "node_1", "type": "architecture", "position": { ... }, "data": { ... } }
```

Every rerun of the same prompt produces the **same string ids** (`"node_1"`, `"node_2"`, ..., `"edge_12"`). When the controller passes them as `id` to Prisma's nested create, the second run collides with the first run's rows on the primary key.

## Fix

In the nested-create block of `prisma.design.create`, drop the explicit `id` field. Keep only `flowId`:

```ts
// BAD — sets Node.id to "node_1" which collides on rerun
nodes: {
  create: nodes.map((node) => ({
    id: node.id,           // <-- remove
    flowId: node.id,
    type: node.type,
    position: node.position,
    data: node.data,
  })),
},

// GOOD — Prisma auto-generates uuid for id; Reactflow id lives in flowId
nodes: {
  create: nodes.map((node) => ({
    flowId: node.id,
    type: node.type,
    position: node.position,
    data: node.data,
  })),
},
```

Same pattern for `edges`.

## Schema context this depends on

`Node` and `Edge` both have:

- `id String @id @default(uuid())` — Prisma-generated primary key
- `flowId String` — the Reactflow-side identifier (`"node_1"`, `"edge_3"`, ...)

The frontend reads `flowId` to address Reactflow elements; the database uses `id` to address rows. They must not be conflated on insert.

## Verification

After fixing, restart the dev server and rerun the same prompt twice — both runs should succeed and produce two distinct designs, each containing the same Node/Edge `flowId`s (`"node_1"` etc.) but distinct Prisma `id`s.

## When NOT to apply

- For other code paths that create Nodes/Edges from data the application itself generated (e.g. user editing an existing design and saving), `id` and `flowId` may both need to come from the client payload. Don't apply this rule blindly — read the call site.
- If the AI prompt is changed to emit unique ids (e.g. uuid-per-node), the constraint goes away and explicit `id` becomes safe. But that's an AI-prompt fix, not a controller fix.