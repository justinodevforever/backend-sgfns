-- CreateTable
CREATE TABLE "Reconfirmacao" (
    "id" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "rupe" BIGINT NOT NULL,
    "fk_semestre" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,
    "fk_estudante" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,

    CONSTRAINT "Reconfirmacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
