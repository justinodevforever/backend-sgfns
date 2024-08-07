/*
  Warnings:

  - You are about to drop the column `createAd` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the column `dataSolicitacao` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the column `fk_ano` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the column `fk_curso` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the column `fk_estudante` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the column `fk_tipo` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the column `fk_user` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the column `formaPagamento` on the `Servico` table. All the data in the column will be lost.
  - You are about to drop the `TipoServico` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `valor` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_tipo_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_user_fkey";

-- AlterTable
ALTER TABLE "Servico" DROP COLUMN "createAd",
DROP COLUMN "dataSolicitacao",
DROP COLUMN "fk_ano",
DROP COLUMN "fk_curso",
DROP COLUMN "fk_estudante",
DROP COLUMN "fk_tipo",
DROP COLUMN "fk_user",
DROP COLUMN "formaPagamento",
ADD COLUMN     "valor" INTEGER NOT NULL;

-- DropTable
DROP TABLE "TipoServico";
