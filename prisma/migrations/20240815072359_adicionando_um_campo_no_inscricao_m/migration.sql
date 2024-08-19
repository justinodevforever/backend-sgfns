/*
  Warnings:

  - A unique constraint covering the columns `[rupe]` on the table `InscricaoMatricula` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_ano` to the `InscricaoMatricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InscricaoMatricula" ADD COLUMN     "fk_ano" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "InscricaoMatricula_rupe_key" ON "InscricaoMatricula"("rupe");

-- AddForeignKey
ALTER TABLE "InscricaoMatricula" ADD CONSTRAINT "InscricaoMatricula_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
