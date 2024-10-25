/*
  Warnings:

  - You are about to drop the column `fk_estudante` on the `CadeiraAtraso` table. All the data in the column will be lost.
  - You are about to drop the column `fk_estudante` on the `Declaracao` table. All the data in the column will be lost.
  - You are about to drop the column `fk_estudante` on the `ExameEspecial` table. All the data in the column will be lost.
  - You are about to drop the column `fk_estudante` on the `Propina` table. All the data in the column will be lost.
  - You are about to drop the column `fk_estudante` on the `Recurso` table. All the data in the column will be lost.
  - Added the required column `fk_reconfirmacao` to the `CadeiraAtraso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_reconfirmacao` to the `Declaracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_reconfirmacao` to the `ExameEspecial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_reconfirmacao` to the `Propina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_reconfirmacao` to the `Recurso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Declaracao" DROP CONSTRAINT "Declaracao_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_estudante_fkey";

-- AlterTable
ALTER TABLE "CadeiraAtraso" DROP COLUMN "fk_estudante",
ADD COLUMN     "fk_reconfirmacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Declaracao" DROP COLUMN "fk_estudante",
ADD COLUMN     "fk_reconfirmacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExameEspecial" DROP COLUMN "fk_estudante",
ADD COLUMN     "fk_reconfirmacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Propina" DROP COLUMN "fk_estudante",
ADD COLUMN     "fk_reconfirmacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reconfirmacao" ADD COLUMN     "pivo" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Recurso" DROP COLUMN "fk_estudante",
ADD COLUMN     "fk_reconfirmacao" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Declaracao" ADD CONSTRAINT "Declaracao_fk_reconfirmacao_fkey" FOREIGN KEY ("fk_reconfirmacao") REFERENCES "Reconfirmacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_reconfirmacao_fkey" FOREIGN KEY ("fk_reconfirmacao") REFERENCES "Reconfirmacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_reconfirmacao_fkey" FOREIGN KEY ("fk_reconfirmacao") REFERENCES "Reconfirmacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_reconfirmacao_fkey" FOREIGN KEY ("fk_reconfirmacao") REFERENCES "Reconfirmacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_reconfirmacao_fkey" FOREIGN KEY ("fk_reconfirmacao") REFERENCES "Reconfirmacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
