/*
  Warnings:

  - You are about to drop the column `desc` on the `Declaracao` table. All the data in the column will be lost.
  - You are about to drop the column `frequencia` on the `Declaracao` table. All the data in the column will be lost.
  - Added the required column `fk_frequencia` to the `Declaracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDeclaracao` to the `Declaracao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Declaracao" DROP COLUMN "desc",
DROP COLUMN "frequencia",
ADD COLUMN     "fk_frequencia" TEXT NOT NULL,
ADD COLUMN     "tipoDeclaracao" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Declaracao" ADD CONSTRAINT "Declaracao_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
