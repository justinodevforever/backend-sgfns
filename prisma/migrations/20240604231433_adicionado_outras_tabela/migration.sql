/*
  Warnings:

  - You are about to drop the column `nome` on the `Declaracao` table. All the data in the column will be lost.
  - Added the required column `fk_estudante` to the `Declaracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frequencia` to the `Declaracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_servico` to the `Solicitacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CadeiraAtraso" ADD COLUMN     "imgRupe" TEXT,
ALTER COLUMN "rupe" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Declaracao" DROP COLUMN "nome",
ADD COLUMN     "createAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fk_estudante" TEXT NOT NULL,
ADD COLUMN     "frequencia" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExameEspecial" ADD COLUMN     "imgRupe" TEXT,
ALTER COLUMN "rupe" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Propina" ADD COLUMN     "imgRupe" TEXT,
ALTER COLUMN "rupe" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reconfirmacao" ADD COLUMN     "imgRupe" TEXT,
ALTER COLUMN "rupe" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Recurso" ADD COLUMN     "imgRupe" TEXT,
ALTER COLUMN "rupe" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Servico" ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Solicitacao" ADD COLUMN     "createAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id_servico" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Declaracao" ADD CONSTRAINT "Declaracao_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
