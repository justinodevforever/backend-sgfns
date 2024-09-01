/*
  Warnings:

  - You are about to drop the column `fk_semestre` on the `Propina` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_semestre_fkey";

-- AlterTable
ALTER TABLE "Propina" DROP COLUMN "fk_semestre";
