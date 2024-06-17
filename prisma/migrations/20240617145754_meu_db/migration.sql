/*
  Warnings:

  - You are about to drop the column `truma` on the `Estudante` table. All the data in the column will be lost.
  - Added the required column `fk_frequencia` to the `Estudante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estudante" DROP COLUMN "truma",
ADD COLUMN     "fk_frequencia" TEXT NOT NULL,
ADD COLUMN     "turma" TEXT;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
