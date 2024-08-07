/*
  Warnings:

  - You are about to drop the column `fk_frquencia` on the `CadeiraAtraso` table. All the data in the column will be lost.
  - Added the required column `fk_frequencia` to the `CadeiraAtraso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_frquencia_fkey";

-- AlterTable
ALTER TABLE "CadeiraAtraso" DROP COLUMN "fk_frquencia",
ADD COLUMN     "fk_frequencia" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
