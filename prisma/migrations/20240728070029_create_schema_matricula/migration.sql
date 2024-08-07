-- CreateTable
CREATE TABLE "Matricula" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "contacto" TEXT,
    "bi" TEXT NOT NULL,
    "regime" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "dataSolicitacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_curso" TEXT NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_contacto_key" ON "Matricula"("contacto");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_bi_key" ON "Matricula"("bi");

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
