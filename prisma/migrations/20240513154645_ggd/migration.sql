-- CreateTable
CREATE TABLE "Solicitacao" (
    "id" TEXT NOT NULL,
    "status" TEXT,
    "fk_estudante" TEXT NOT NULL,
    "tipoServico" TEXT NOT NULL,

    CONSTRAINT "Solicitacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Solicitacao" ADD CONSTRAINT "Solicitacao_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
