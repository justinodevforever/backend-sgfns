/*
  Warnings:

  - Added the required column `fk_user` to the `CadeiraAtraso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_user` to the `Declaracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_user` to the `ExameEspecial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_user` to the `Recurso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CadeiraAtraso" ADD COLUMN     "fk_user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Declaracao" ADD COLUMN     "fk_user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExameEspecial" ADD COLUMN     "fk_user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recurso" ADD COLUMN     "fk_user" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PagamentoFolha" (
    "id" TEXT NOT NULL,
    "fk_estudante" TEXT NOT NULL,

    CONSTRAINT "PagamentoFolha_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Declaracao" ADD CONSTRAINT "Declaracao_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagamentoFolha" ADD CONSTRAINT "PagamentoFolha_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
