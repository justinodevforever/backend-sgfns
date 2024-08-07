/*
  Warnings:

  - Added the required column `frequencia` to the `Propina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Propina" ADD COLUMN     "frequencia" TEXT NOT NULL;
