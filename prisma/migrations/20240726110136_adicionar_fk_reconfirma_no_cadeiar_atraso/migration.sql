/*
  Warnings:

  - Added the required column `fk_reconfirmacao` to the `CadeiraAtraso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CadeiraAtraso" ADD COLUMN     "fk_reconfirmacao" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_reconfirmacao_fkey" FOREIGN KEY ("fk_reconfirmacao") REFERENCES "Reconfirmacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
