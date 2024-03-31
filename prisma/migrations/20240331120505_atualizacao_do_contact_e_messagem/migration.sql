/*
  Warnings:

  - The primary key for the `ContactUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Contacto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `seguir` to the `ContactUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactUser" DROP CONSTRAINT "ContactUser_pkey",
ADD COLUMN     "seguir" BOOLEAN NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ContactUser_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContactUser_id_seq";

-- DropTable
DROP TABLE "Contacto";

-- CreateTable
CREATE TABLE "Messagem" (
    "id" TEXT NOT NULL,
    "sms" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lida" BOOLEAN,
    "sendId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "Messagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Messagem" ADD CONSTRAINT "Messagem_sendId_fkey" FOREIGN KEY ("sendId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messagem" ADD CONSTRAINT "Messagem_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "ContactUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
