/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ProfileUser` table. All the data in the column will be lost.
  - The `valor` column on the `Propina` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProfileUser" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Propina" DROP COLUMN "valor",
ADD COLUMN     "valor" INTEGER;
