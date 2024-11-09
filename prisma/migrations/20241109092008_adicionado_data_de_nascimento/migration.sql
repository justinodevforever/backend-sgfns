/*
  Warnings:

  - Added the required column `dataNascimento` to the `Estudante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `InscricaoMatricula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `Matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estudante" ADD COLUMN     "dataNascimento" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InscricaoMatricula" ADD COLUMN     "dataNascimento" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "dataNascimento" TEXT NOT NULL;
