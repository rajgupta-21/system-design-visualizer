-- DropForeignKey
ALTER TABLE "Design" DROP CONSTRAINT "Design_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_designId_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_designId_fkey";

-- AlterTable
ALTER TABLE "Design" ADD COLUMN     "description" TEXT,
ADD COLUMN     "previewImage" TEXT;

-- AlterTable
ALTER TABLE "Edge" ADD COLUMN     "flowId" TEXT;

-- AlterTable
ALTER TABLE "Node" ADD COLUMN     "flowId" TEXT;

-- Backfill: existing rows use their own id as the Reactflow flowId
UPDATE "Edge" SET "flowId" = "id" WHERE "flowId" IS NULL;
UPDATE "Node" SET "flowId" = "id" WHERE "flowId" IS NULL;

-- Make flowId required now that all rows are populated
ALTER TABLE "Edge" ALTER COLUMN "flowId" SET NOT NULL;
ALTER TABLE "Node" ALTER COLUMN "flowId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
