/*
  Warnings:

  - Added the required column `fk_frequencia` to the `Matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "fk_frequencia" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
