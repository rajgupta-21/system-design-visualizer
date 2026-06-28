/*
  Warnings:

  - You are about to drop the column `status` on the `Design` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Edge` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Node` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Node` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Node` table. All the data in the column will be lost.
  - You are about to drop the column `positionX` on the `Node` table. All the data in the column will be lost.
  - You are about to drop the column `positionY` on the `Node` table. All the data in the column will be lost.
  - Added the required column `data` to the `Node` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Node` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_designId_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_designId_fkey";

-- AlterTable
ALTER TABLE "Design" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Edge" DROP COLUMN "label";

-- AlterTable
ALTER TABLE "Node" DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "label",
DROP COLUMN "positionX",
DROP COLUMN "positionY",
ADD COLUMN     "data" JSONB NOT NULL,
ADD COLUMN     "position" JSONB NOT NULL;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
