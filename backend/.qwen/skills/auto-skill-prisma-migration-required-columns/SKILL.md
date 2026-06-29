---
name: prisma-migration-required-columns
description: Fix "Added the required column X without a default value" errors in `prisma migrate dev` by using --create-only and rewriting the migration as add-nullable → backfill → set NOT NULL.
source: auto-skill
extracted_at: '2026-06-29T15:10:33.570Z'
---

# Prisma migration: required columns on populated tables

## Symptom

`npx prisma migrate dev` refuses to apply a migration that adds a required (non-null) column to a non-empty table:

```
⚠️ We found changes that cannot be executed:

  • Step 4 Added the required column `flowId` to the `Edge` table without a default value. There are 15 rows in this table, it is not possible to execute this step.
```

## Why this happens

Prisma auto-generates migration SQL as `ALTER TABLE ... ADD COLUMN "x" TEXT NOT NULL`. On an empty table that's fine; on a table with rows it's a contradiction (you can't have NULL in a NOT NULL column, and there's no value to put there).

## Fix procedure

1. **Generate the migration without applying it:**
   ```bash
   npx prisma migrate dev --create-only --name add_<column>
   ```
   This writes `prisma/migrations/<timestamp>_add_<column>/migration.sql` and stops.

2. **Rewrite the migration to a three-step pattern** — add nullable, backfill, then enforce NOT NULL:
   ```sql
   -- Step 1: add as nullable
   ALTER TABLE "Edge" ADD COLUMN "flowId" TEXT;
   ALTER TABLE "Node" ADD COLUMN "flowId" TEXT;

   -- Step 2: backfill (choose one)
   UPDATE "Edge" SET "flowId" = "id";    -- if pk is acceptable
   -- or: UPDATE "Edge" SET "flowId" = 'legacy-' || "id";
   -- or: UPDATE "Edge" SET "flowId" = '' WHERE "flowId" IS NULL;  -- last resort

   -- Step 3: enforce NOT NULL
   ALTER TABLE "Edge" ALTER COLUMN "flowId" SET NOT NULL;
   ALTER TABLE "Node" ALTER COLUMN "flowId" SET NOT NULL;
   ```

3. **Apply:**
   ```bash
   npx prisma migrate dev
   ```
   It applies your edited SQL and regenerates the Prisma Client.

## Backfill strategy decision

- **Backfill from `id`** — cleanest when `id` is a uuid and the new column will hold user-visible identifiers or Reactflow ids. Loses no data, no business logic needed.
- **Drop the rows** — only if the rows are stale test data (`TRUNCATE "Edge", "Node" CASCADE` before re-running the migration).
- **Make the column nullable in the schema** — avoid this unless the application genuinely tolerates nulls; usually it's a code smell.

## When NOT to apply

- For a brand-new table that hasn't been deployed, just delete the migration and re-run with `--name init` after fixing the schema.
- If the column needs a real per-row value computed from application data (e.g. a derived field), the migration can't compute it — write the backfill as a separate one-shot script that runs against a deployed app instead.