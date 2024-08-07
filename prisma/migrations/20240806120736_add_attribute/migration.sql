/*
  Warnings:

  - A unique constraint covering the columns `[tipo]` on the table `Servico` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Servico_tipo_key" ON "Servico"("tipo");
