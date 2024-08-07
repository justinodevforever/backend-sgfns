/*
  Warnings:

  - You are about to drop the column `fk_reconfirmacao` on the `CadeiraAtraso` table. All the data in the column will be lost.
  - Added the required column `reconfirmacaoId` to the `CadeiraAtraso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_reconfirmacao_fkey";

-- AlterTable
ALTER TABLE "CadeiraAtraso" DROP COLUMN "fk_reconfirmacao",
ADD COLUMN     "reconfirmacaoId" TEXT NOT NULL;
