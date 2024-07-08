/*
  Warnings:

  - Made the column `dataSolicitacao` on table `Propina` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Propina" ALTER COLUMN "dataSolicitacao" SET NOT NULL,
ALTER COLUMN "dataSolicitacao" SET DEFAULT CURRENT_TIMESTAMP;
