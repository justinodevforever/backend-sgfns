-- DropIndex
DROP INDEX "CadeiraAtraso_fk_estudante_key";

-- DropIndex
DROP INDEX "ExameEspecial_fk_estudante_key";

-- DropIndex
DROP INDEX "Publicacao_fk_user_key";

-- DropIndex
DROP INDEX "Recurso_fk_estudante_key";

-- AlterTable
ALTER TABLE "Publicacao" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "ProfilePublicacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "legenda" TEXT NOT NULL,
    "fk_publicacao" TEXT NOT NULL,

    CONSTRAINT "ProfilePublicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_user" TEXT NOT NULL,
    "fk_publicacao" TEXT NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkComentarioPublicacao" (
    "id" TEXT NOT NULL,
    "linke" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_user" TEXT NOT NULL,
    "fk_comentario" TEXT NOT NULL,

    CONSTRAINT "LinkComentarioPublicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkPublicacao" (
    "id" TEXT NOT NULL,
    "linke" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_user" TEXT NOT NULL,
    "fk_publicacao" TEXT NOT NULL,

    CONSTRAINT "LinkPublicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkComunicado" (
    "id" TEXT NOT NULL,
    "linke" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_user" TEXT NOT NULL,

    CONSTRAINT "LinkComunicado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mes" (
    "id" TEXT NOT NULL,
    "mes" TEXT,
    "algarismo" INTEGER NOT NULL,

    CONSTRAINT "Mes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Propina" (
    "id" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rupe" BIGINT NOT NULL,
    "fk_estudante" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,
    "fk_mes" TEXT NOT NULL,
    "fk_semestre" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,

    CONSTRAINT "Propina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "dataSolicitacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataValidacao" TIMESTAMP(3) NOT NULL,
    "formaPagamento" TEXT NOT NULL,
    "fk_estudante" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,
    "fk_tipo" TEXT NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePublicacao_nome_key" ON "ProfilePublicacao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePublicacao_fk_publicacao_key" ON "ProfilePublicacao"("fk_publicacao");

-- CreateIndex
CREATE UNIQUE INDEX "Propina_valor_key" ON "Propina"("valor");

-- AddForeignKey
ALTER TABLE "ProfilePublicacao" ADD CONSTRAINT "ProfilePublicacao_fk_publicacao_fkey" FOREIGN KEY ("fk_publicacao") REFERENCES "Publicacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_fk_publicacao_fkey" FOREIGN KEY ("fk_publicacao") REFERENCES "Publicacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkComentarioPublicacao" ADD CONSTRAINT "LinkComentarioPublicacao_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkComentarioPublicacao" ADD CONSTRAINT "LinkComentarioPublicacao_fk_comentario_fkey" FOREIGN KEY ("fk_comentario") REFERENCES "Comentario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkPublicacao" ADD CONSTRAINT "LinkPublicacao_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkPublicacao" ADD CONSTRAINT "LinkPublicacao_fk_publicacao_fkey" FOREIGN KEY ("fk_publicacao") REFERENCES "Publicacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkComunicado" ADD CONSTRAINT "LinkComunicado_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_mes_fkey" FOREIGN KEY ("fk_mes") REFERENCES "Mes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_tipo_fkey" FOREIGN KEY ("fk_tipo") REFERENCES "TipoServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
