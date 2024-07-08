/*
  Warnings:

  - Made the column `dataSolicitacao` on table `CadeiraAtraso` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataSolicitacao` on table `Declaracao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataSolicitacao` on table `ExameEspecial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataSolicitacao` on table `Reconfirmacao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataSolicitacao` on table `Recurso` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataSolicitacao` on table `Servico` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CadeiraAtraso" ALTER COLUMN "dataSolicitacao" SET NOT NULL,
ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Declaracao" ALTER COLUMN "dataSolicitacao" SET NOT NULL,
ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ExameEspecial" ALTER COLUMN "dataSolicitacao" SET NOT NULL,
ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Reconfirmacao" ALTER COLUMN "dataSolicitacao" SET NOT NULL,
ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Recurso" ALTER COLUMN "dataSolicitacao" SET NOT NULL,
ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Servico" ALTER COLUMN "dataSolicitacao" SET NOT NULL,
ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;
