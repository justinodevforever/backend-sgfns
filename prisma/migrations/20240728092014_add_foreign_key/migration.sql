/*
  Warnings:

  - Added the required column `fk_user` to the `InscricaoMatricula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_user` to the `Matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InscricaoMatricula" ADD COLUMN     "fk_user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "fk_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InscricaoMatricula" ADD CONSTRAINT "InscricaoMatricula_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
