/*
  Warnings:

  - You are about to drop the column `imgRupe` on the `CadeiraAtraso` table. All the data in the column will be lost.
  - You are about to drop the column `fk_user` on the `Estudante` table. All the data in the column will be lost.
  - You are about to drop the column `periodo` on the `Estudante` table. All the data in the column will be lost.
  - You are about to drop the column `imgRupe` on the `ExameEspecial` table. All the data in the column will be lost.
  - You are about to drop the column `imgRupe` on the `Propina` table. All the data in the column will be lost.
  - You are about to drop the column `imgRupe` on the `Reconfirmacao` table. All the data in the column will be lost.
  - You are about to drop the column `imgRupe` on the `Recurso` table. All the data in the column will be lost.
  - You are about to drop the column `dataValidacao` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the `Comentario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkComentarioPublicacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkComunicado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkPublicacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Messagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfilePublicacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Publicacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Solicitacao` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `rupe` on table `CadeiraAtraso` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `abreviatura` to the `Disciplina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regime` to the `Estudante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `Estudante` table without a default value. This is not possible if the table is not empty.
  - Made the column `rupe` on table `ExameEspecial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rupe` on table `Propina` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rupe` on table `Recurso` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_fk_publicacao_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "ContactUser" DROP CONSTRAINT "ContactUser_receiveId_fkey";

-- DropForeignKey
ALTER TABLE "ContactUser" DROP CONSTRAINT "ContactUser_sendId_fkey";

-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "LinkComentarioPublicacao" DROP CONSTRAINT "LinkComentarioPublicacao_fk_comentario_fkey";

-- DropForeignKey
ALTER TABLE "LinkComentarioPublicacao" DROP CONSTRAINT "LinkComentarioPublicacao_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "LinkComunicado" DROP CONSTRAINT "LinkComunicado_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "LinkPublicacao" DROP CONSTRAINT "LinkPublicacao_fk_publicacao_fkey";

-- DropForeignKey
ALTER TABLE "LinkPublicacao" DROP CONSTRAINT "LinkPublicacao_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "Messagem" DROP CONSTRAINT "Messagem_contactId_fkey";

-- DropForeignKey
ALTER TABLE "Messagem" DROP CONSTRAINT "Messagem_sendId_fkey";

-- DropForeignKey
ALTER TABLE "ProfilePublicacao" DROP CONSTRAINT "ProfilePublicacao_fk_publicacao_fkey";

-- DropForeignKey
ALTER TABLE "Publicacao" DROP CONSTRAINT "Publicacao_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "Solicitacao" DROP CONSTRAINT "Solicitacao_fk_estudante_fkey";

-- AlterTable
ALTER TABLE "CadeiraAtraso" DROP COLUMN "imgRupe",
ADD COLUMN     "dataSolicitacao" TEXT,
ALTER COLUMN "rupe" SET NOT NULL;

-- AlterTable
ALTER TABLE "Declaracao" ADD COLUMN     "dataSolicitacao" TEXT;

-- AlterTable
ALTER TABLE "Disciplina" ADD COLUMN     "abreviatura" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Estudante" DROP COLUMN "fk_user",
DROP COLUMN "periodo",
ADD COLUMN     "regime" TEXT NOT NULL,
ADD COLUMN     "sexo" TEXT NOT NULL,
ADD COLUMN     "truma" TEXT,
ALTER COLUMN "contacto" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ExameEspecial" DROP COLUMN "imgRupe",
ADD COLUMN     "dataSolicitacao" TEXT,
ALTER COLUMN "rupe" SET NOT NULL;

-- AlterTable
ALTER TABLE "Propina" DROP COLUMN "imgRupe",
ADD COLUMN     "dataSolicitacao" TEXT,
ALTER COLUMN "rupe" SET NOT NULL;

-- AlterTable
ALTER TABLE "Reconfirmacao" DROP COLUMN "imgRupe",
ADD COLUMN     "dataSolicitacao" TEXT;

-- AlterTable
ALTER TABLE "Recurso" DROP COLUMN "imgRupe",
ADD COLUMN     "dataSolicitacao" TEXT,
ALTER COLUMN "rupe" SET NOT NULL;

-- AlterTable
ALTER TABLE "Servico" DROP COLUMN "dataValidacao",
ADD COLUMN     "createAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "dataSolicitacao" DROP NOT NULL,
ALTER COLUMN "dataSolicitacao" DROP DEFAULT,
ALTER COLUMN "dataSolicitacao" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "TipoServico" ALTER COLUMN "tipo" DROP NOT NULL;

-- DropTable
DROP TABLE "Comentario";

-- DropTable
DROP TABLE "ContactUser";

-- DropTable
DROP TABLE "LinkComentarioPublicacao";

-- DropTable
DROP TABLE "LinkComunicado";

-- DropTable
DROP TABLE "LinkPublicacao";

-- DropTable
DROP TABLE "Messagem";

-- DropTable
DROP TABLE "ProfilePublicacao";

-- DropTable
DROP TABLE "Publicacao";

-- DropTable
DROP TABLE "Solicitacao";

-- CreateTable
CREATE TABLE "ListaRecurso" (
    "id" TEXT NOT NULL,
    "fk_recurso" TEXT NOT NULL,

    CONSTRAINT "ListaRecurso_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ListaRecurso" ADD CONSTRAINT "ListaRecurso_fk_recurso_fkey" FOREIGN KEY ("fk_recurso") REFERENCES "Recurso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
