-- CreateTable
CREATE TABLE "ContactUser" (
    "id" SERIAL NOT NULL,
    "sendId" TEXT NOT NULL,
    "receiveId" TEXT NOT NULL,

    CONSTRAINT "ContactUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContactUser" ADD CONSTRAINT "ContactUser_sendId_fkey" FOREIGN KEY ("sendId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactUser" ADD CONSTRAINT "ContactUser_receiveId_fkey" FOREIGN KEY ("receiveId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
