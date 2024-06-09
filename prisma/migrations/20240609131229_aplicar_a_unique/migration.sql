/*
  Warnings:

  - You are about to drop the column `createAt` on the `Solicitacao` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rupe]` on the table `CadeiraAtraso` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rupe]` on the table `Propina` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rupe]` on the table `Reconfirmacao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rupe]` on the table `Recurso` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Solicitacao" DROP COLUMN "createAt";

-- CreateIndex
CREATE UNIQUE INDEX "CadeiraAtraso_rupe_key" ON "CadeiraAtraso"("rupe");

-- CreateIndex
CREATE UNIQUE INDEX "Propina_rupe_key" ON "Propina"("rupe");

-- CreateIndex
CREATE UNIQUE INDEX "Reconfirmacao_rupe_key" ON "Reconfirmacao"("rupe");

-- CreateIndex
CREATE UNIQUE INDEX "Recurso_rupe_key" ON "Recurso"("rupe");
