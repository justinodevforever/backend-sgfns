/*
  Warnings:

  - The `dataSolicitacao` column on the `Servico` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Servico" DROP COLUMN "dataSolicitacao",
ADD COLUMN     "dataSolicitacao" TIMESTAMP(3);
