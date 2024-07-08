/*
  Warnings:

  - Added the required column `valor` to the `Declaracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataSolicitada` to the `PagamentoFolha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_user` to the `PagamentoFolha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `PagamentoFolha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Declaracao" ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "PagamentoFolha" ADD COLUMN     "dataSolicitada" TEXT NOT NULL,
ADD COLUMN     "fk_user" TEXT NOT NULL,
ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "PagamentoFolha" ADD CONSTRAINT "PagamentoFolha_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
