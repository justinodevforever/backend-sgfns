/*
  Warnings:

  - The `dataSolicitacao` column on the `CadeiraAtraso` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dataSolicitacao` column on the `Declaracao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dataSolicitacao` column on the `ExameEspecial` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dataSolicitacao` column on the `Reconfirmacao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dataSolicitacao` column on the `Recurso` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CadeiraAtraso" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "dataSolicitacao",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Declaracao" ALTER COLUMN "createAd" SET DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "dataSolicitacao",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ExameEspecial" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "dataSolicitacao",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Propina" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Reconfirmacao" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "dataSolicitacao",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Recurso" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "dataSolicitacao",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Servico" ALTER COLUMN "createAd" SET DEFAULT CURRENT_TIMESTAMP;
