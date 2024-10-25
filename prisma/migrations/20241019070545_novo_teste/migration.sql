/*
  Warnings:

  - You are about to drop the column `fk_frequencia` on the `Estudante` table. All the data in the column will be lost.
  - You are about to drop the column `anoFrequencia` on the `Propina` table. All the data in the column will be lost.
  - You are about to drop the column `frequencia` on the `Propina` table. All the data in the column will be lost.
  - You are about to drop the column `fk_curso` on the `Reconfirmacao` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_fk_frequencia_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_curso_fkey";

-- AlterTable
ALTER TABLE "Estudante" DROP COLUMN "fk_frequencia";

-- AlterTable
ALTER TABLE "Propina" DROP COLUMN "anoFrequencia",
DROP COLUMN "frequencia";

-- AlterTable
ALTER TABLE "Reconfirmacao" DROP COLUMN "fk_curso";
