---
name: prisma-relation-syntax
description: Diagnose Prisma "This line is not a valid field or attribute definition" errors around @relation(...) blocks — the cause is usually the multi-line layout, not the argument syntax.
source: auto-skill
extracted_at: '2026-06-29T15:04:34.722Z'
---

# Prisma @relation multi-line parser pitfall

## Symptom

`npx prisma validate` (Prisma 6.x) reports errors like:

```
error: Error validating: This line is not a valid field or attribute definition.
  -->  prisma/schema.prisma:53
   |
53 |   owner User @relation(
54 |     fields: [ownerId],
   |
error: Field declarations don't require a `:`.
  -->  prisma/schema.prisma:56
```

The errors point at the **argument lines** (`fields:`, `references:`, `onDelete:`), making you think the syntax is wrong — but the colon-space form `fields: [ownerId]` is valid Prisma syntax (and the same syntax works fine inline).

## Real cause

The validator rejects the **multi-line parenthesized form** of `@relation` when it contains named arguments. This reproduces with a minimal schema — no other code is involved. Verified on Prisma CLI 6.19.3.

## Fix

Collapse each `@relation(...)` call onto a single line:

```prisma
# BAD — multi-line, parser rejects
owner User @relation(
  fields: [ownerId],
  references: [id],
  onDelete: Cascade
)

# GOOD — single line, validates fine
owner User @relation(fields: [ownerId], references: [id], onDelete: Cascade)
```

## How to diagnose quickly

1. Run `npx prisma validate` and note the line numbers.
2. Extract just the offending model into a minimal `/tmp/test.prisma` with a known-good User/Post pair.
3. Try the same `@relation(...)` on a single line. If it validates, the layout was the problem — apply the fix to all relations in the real schema.

## When NOT to apply

If the error persists after collapsing to one line, then it's a real syntax problem (typo in `fields`/`references`, missing back-relation, unknown referenced model, etc.). Re-check the model name, the back-relation field on the parent, and that referenced models are defined in the same file.