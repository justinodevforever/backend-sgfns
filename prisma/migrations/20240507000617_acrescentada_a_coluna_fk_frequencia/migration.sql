/*
  Warnings:

  - Added the required column `fk_frequencia` to the `Reconfirmacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_ano_fkey";

-- AlterTable
ALTER TABLE "Reconfirmacao" ADD COLUMN     "fk_frequencia" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
