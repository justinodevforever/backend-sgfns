/*
  Warnings:

  - You are about to drop the column `frequencia` on the `Propina` table. All the data in the column will be lost.
  - Added the required column `anoFrequencia` to the `Propina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Propina" DROP COLUMN "frequencia",
ADD COLUMN     "anoFrequencia" TEXT NOT NULL;
