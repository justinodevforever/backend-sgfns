/*
  Warnings:

  - You are about to drop the column `dataSolicitada` on the `PagamentoFolha` table. All the data in the column will be lost.
  - You are about to drop the column `fk_estudante` on the `PagamentoFolha` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PagamentoFolha" DROP CONSTRAINT "PagamentoFolha_fk_estudante_fkey";

-- AlterTable
ALTER TABLE "PagamentoFolha" DROP COLUMN "dataSolicitada",
DROP COLUMN "fk_estudante",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
