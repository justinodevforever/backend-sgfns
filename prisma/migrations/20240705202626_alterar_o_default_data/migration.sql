/*
  Warnings:

  - The `dataSolicitacao` column on the `Propina` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CadeiraAtraso" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Declaracao" ALTER COLUMN "createAd" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ExameEspecial" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Propina" ALTER COLUMN "createdAt" DROP DEFAULT,
DROP COLUMN "dataSolicitacao",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Reconfirmacao" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Recurso" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Servico" ALTER COLUMN "createAd" DROP DEFAULT;
