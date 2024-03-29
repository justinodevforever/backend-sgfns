-- CreateTable
CREATE TABLE "UserSystem" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "UserSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bi" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRoles" (
    "id" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,
    "fk_role" TEXT NOT NULL,

    CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "permissao" TEXT NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPermission" (
    "id" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,
    "fk_permission" TEXT NOT NULL,

    CONSTRAINT "UserPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoServico" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "TipoServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnoFrequencia" (
    "id" TEXT NOT NULL,
    "ano" TEXT NOT NULL,

    CONSTRAINT "AnoFrequencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnoLectivo" (
    "id" TEXT NOT NULL,
    "ano" TEXT NOT NULL,

    CONSTRAINT "AnoLectivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudante" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "bi" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,

    CONSTRAINT "Estudante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contacto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Contacto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" TEXT NOT NULL,
    "curso" TEXT NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Declaracao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Declaracao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semestre" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Semestre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,
    "fk_semestre" TEXT NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExameEspecial" (
    "id" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rupe" BIGINT NOT NULL,
    "fk_estudante" TEXT NOT NULL,
    "fk_frquencia" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "fk_disciplina" TEXT NOT NULL,
    "fk_semestre" TEXT NOT NULL,

    CONSTRAINT "ExameEspecial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CadeiraAtraso" (
    "id" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rupe" BIGINT NOT NULL,
    "fk_estudante" TEXT NOT NULL,
    "fk_frquencia" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "fk_disciplina" TEXT NOT NULL,
    "fk_semestre" TEXT NOT NULL,

    CONSTRAINT "CadeiraAtraso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recurso" (
    "id" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rupe" BIGINT NOT NULL,
    "fk_estudante" TEXT NOT NULL,
    "fk_frquencia" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "fk_disciplina" TEXT NOT NULL,
    "fk_semestre" TEXT NOT NULL,

    CONSTRAINT "Recurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileUser" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "legenda" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,

    CONSTRAINT "ProfileUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publicacao" (
    "id" TEXT NOT NULL,
    "publicacao" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,

    CONSTRAINT "Publicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplinaCurso" (
    "id" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "fk_disciplina" TEXT NOT NULL,

    CONSTRAINT "DisciplinaCurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CursoFrequencia" (
    "id" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "fk_ano" TEXT NOT NULL,

    CONSTRAINT "CursoFrequencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_key" ON "Role"("role");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_bi_key" ON "Usuario"("bi");

-- CreateIndex
CREATE UNIQUE INDEX "TipoServico_tipo_key" ON "TipoServico"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "AnoFrequencia_ano_key" ON "AnoFrequencia"("ano");

-- CreateIndex
CREATE UNIQUE INDEX "AnoLectivo_ano_key" ON "AnoLectivo"("ano");

-- CreateIndex
CREATE UNIQUE INDEX "Estudante_contacto_key" ON "Estudante"("contacto");

-- CreateIndex
CREATE UNIQUE INDEX "Estudante_bi_key" ON "Estudante"("bi");

-- CreateIndex
CREATE UNIQUE INDEX "Estudante_fk_user_key" ON "Estudante"("fk_user");

-- CreateIndex
CREATE UNIQUE INDEX "Estudante_fk_curso_key" ON "Estudante"("fk_curso");

-- CreateIndex
CREATE UNIQUE INDEX "Curso_curso_key" ON "Curso"("curso");

-- CreateIndex
CREATE UNIQUE INDEX "Semestre_nome_key" ON "Semestre"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Disciplina_nome_key" ON "Disciplina"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ExameEspecial_valor_key" ON "ExameEspecial"("valor");

-- CreateIndex
CREATE UNIQUE INDEX "ExameEspecial_fk_estudante_key" ON "ExameEspecial"("fk_estudante");

-- CreateIndex
CREATE UNIQUE INDEX "CadeiraAtraso_valor_key" ON "CadeiraAtraso"("valor");

-- CreateIndex
CREATE UNIQUE INDEX "CadeiraAtraso_fk_estudante_key" ON "CadeiraAtraso"("fk_estudante");

-- CreateIndex
CREATE UNIQUE INDEX "Recurso_valor_key" ON "Recurso"("valor");

-- CreateIndex
CREATE UNIQUE INDEX "Recurso_fk_estudante_key" ON "Recurso"("fk_estudante");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileUser_nome_key" ON "ProfileUser"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileUser_fk_user_key" ON "ProfileUser"("fk_user");

-- CreateIndex
CREATE UNIQUE INDEX "Publicacao_publicacao_key" ON "Publicacao"("publicacao");

-- CreateIndex
CREATE UNIQUE INDEX "Publicacao_fk_user_key" ON "Publicacao"("fk_user");

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "UserRoles_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "UserRoles_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_fk_permission_fkey" FOREIGN KEY ("fk_permission") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_frquencia_fkey" FOREIGN KEY ("fk_frquencia") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_disciplina_fkey" FOREIGN KEY ("fk_disciplina") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_frquencia_fkey" FOREIGN KEY ("fk_frquencia") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_disciplina_fkey" FOREIGN KEY ("fk_disciplina") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_frquencia_fkey" FOREIGN KEY ("fk_frquencia") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_disciplina_fkey" FOREIGN KEY ("fk_disciplina") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileUser" ADD CONSTRAINT "ProfileUser_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publicacao" ADD CONSTRAINT "Publicacao_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplinaCurso" ADD CONSTRAINT "DisciplinaCurso_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplinaCurso" ADD CONSTRAINT "DisciplinaCurso_fk_disciplina_fkey" FOREIGN KEY ("fk_disciplina") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursoFrequencia" ADD CONSTRAINT "CursoFrequencia_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursoFrequencia" ADD CONSTRAINT "CursoFrequencia_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoFrequencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
