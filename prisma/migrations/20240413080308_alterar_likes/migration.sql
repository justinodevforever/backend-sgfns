/*
  Warnings:

  - You are about to drop the column `linke` on the `LinkComentarioPublicacao` table. All the data in the column will be lost.
  - You are about to drop the column `linke` on the `LinkComunicado` table. All the data in the column will be lost.
  - You are about to drop the column `linke` on the `LinkPublicacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LinkComentarioPublicacao" DROP COLUMN "linke",
ADD COLUMN     "like" BOOLEAN;

-- AlterTable
ALTER TABLE "LinkComunicado" DROP COLUMN "linke",
ADD COLUMN     "like" BOOLEAN;

-- AlterTable
ALTER TABLE "LinkPublicacao" DROP COLUMN "linke",
ADD COLUMN     "like" BOOLEAN;
