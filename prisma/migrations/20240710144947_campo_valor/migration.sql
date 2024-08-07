/*
  Warnings:

  - Changed the type of `valor` on the `CadeiraAtraso` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `valor` on the `ExameEspecial` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CadeiraAtraso" DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "ExameEspecial" DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;
