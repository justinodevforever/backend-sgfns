/*
  Warnings:

  - A unique constraint covering the columns `[rupe]` on the table `Matricula` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_ano` to the `Matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "fk_ano" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_rupe_key" ON "Matricula"("rupe");

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
