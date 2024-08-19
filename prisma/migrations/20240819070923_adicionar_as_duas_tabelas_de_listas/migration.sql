-- CreateTable
CREATE TABLE "ListaExameEspecial" (
    "id" TEXT NOT NULL,
    "fk_exame" TEXT NOT NULL,

    CONSTRAINT "ListaExameEspecial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListaCadeira" (
    "id" TEXT NOT NULL,
    "fk_cadeira" TEXT NOT NULL,

    CONSTRAINT "ListaCadeira_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ListaExameEspecial" ADD CONSTRAINT "ListaExameEspecial_fk_exame_fkey" FOREIGN KEY ("fk_exame") REFERENCES "ExameEspecial"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaCadeira" ADD CONSTRAINT "ListaCadeira_fk_cadeira_fkey" FOREIGN KEY ("fk_cadeira") REFERENCES "CadeiraAtraso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
