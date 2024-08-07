-- CreateTable
CREATE TABLE "InscricaoMatricula" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "contacto" TEXT,
    "bi" TEXT NOT NULL,
    "regime" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "dataSolicitacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_curso" TEXT NOT NULL,

    CONSTRAINT "InscricaoMatricula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InscricaoMatricula_contacto_key" ON "InscricaoMatricula"("contacto");

-- CreateIndex
CREATE UNIQUE INDEX "InscricaoMatricula_bi_key" ON "InscricaoMatricula"("bi");

-- AddForeignKey
ALTER TABLE "InscricaoMatricula" ADD CONSTRAINT "InscricaoMatricula_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
