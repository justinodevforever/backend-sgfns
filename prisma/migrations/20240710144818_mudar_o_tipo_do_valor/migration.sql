/*
  Warnings:

  - Changed the type of `valor` on the `Recurso` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Recurso" DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;
