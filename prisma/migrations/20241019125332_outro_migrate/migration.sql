/*
  Warnings:

  - You are about to drop the column `fk_reconfirmacao` on the `CadeiraAtraso` table. All the data in the column will be lost.
  - You are about to drop the column `fk_reconfirmacao` on the `Declaracao` table. All the data in the column will be lost.
  - You are about to drop the column `fk_reconfirmacao` on the `ExameEspecial` table. All the data in the column will be lost.
  - You are about to drop the column `fk_reconfirmacao` on the `Propina` table. All the data in the column will be lost.
  - You are about to drop the column `fk_reconfirmacao` on the `Recurso` table. All the data in the column will be lost.
  - Added the required column `fk_estudante` to the `CadeiraAtraso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_estudante` to the `Declaracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_frequencia` to the `Estudante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_estudante` to the `ExameEspecial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anoFrequencia` to the `Propina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_estudante` to the `Propina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_estudante` to the `Recurso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_reconfirmacao_fkey";

-- DropForeignKey
ALTER TABLE "Declaracao" DROP CONSTRAINT "Declaracao_fk_reconfirmacao_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_reconfirmacao_fkey";

-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_reconfirmacao_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_reconfirmacao_fkey";

-- AlterTable
ALTER TABLE "CadeiraAtraso" DROP COLUMN "fk_reconfirmacao",
ADD COLUMN     "fk_estudante" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Declaracao" DROP COLUMN "fk_reconfirmacao",
ADD COLUMN     "fk_estudante" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Estudante" ADD COLUMN     "fk_frequencia" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExameEspecial" DROP COLUMN "fk_reconfirmacao",
ADD COLUMN     "fk_estudante" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Propina" DROP COLUMN "fk_reconfirmacao",
ADD COLUMN     "anoFrequencia" TEXT NOT NULL,
ADD COLUMN     "fk_estudante" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recurso" DROP COLUMN "fk_reconfirmacao",
ADD COLUMN     "fk_estudante" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Declaracao" ADD CONSTRAINT "Declaracao_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
