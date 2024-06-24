-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_disciplina_fkey";

-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_frquencia_fkey";

-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_semestre_fkey";

-- DropForeignKey
ALTER TABLE "CadeiraAtraso" DROP CONSTRAINT "CadeiraAtraso_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "CursoFrequencia" DROP CONSTRAINT "CursoFrequencia_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "CursoFrequencia" DROP CONSTRAINT "CursoFrequencia_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "Declaracao" DROP CONSTRAINT "Declaracao_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Declaracao" DROP CONSTRAINT "Declaracao_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_fk_semestre_fkey";

-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_fk_frequencia_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_disciplina_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_frquencia_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_semestre_fkey";

-- DropForeignKey
ALTER TABLE "ExameEspecial" DROP CONSTRAINT "ExameEspecial_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "ListaRecurso" DROP CONSTRAINT "ListaRecurso_fk_recurso_fkey";

-- DropForeignKey
ALTER TABLE "PagamentoFolha" DROP CONSTRAINT "PagamentoFolha_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "ProfileUser" DROP CONSTRAINT "ProfileUser_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_mes_fkey";

-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_semestre_fkey";

-- DropForeignKey
ALTER TABLE "Propina" DROP CONSTRAINT "Propina_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_frequencia_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_semestre_fkey";

-- DropForeignKey
ALTER TABLE "Reconfirmacao" DROP CONSTRAINT "Reconfirmacao_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_disciplina_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_frquencia_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_semestre_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_ano_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_estudante_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_tipo_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "UserPermission" DROP CONSTRAINT "UserPermission_fk_permission_fkey";

-- DropForeignKey
ALTER TABLE "UserPermission" DROP CONSTRAINT "UserPermission_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "UserRoles" DROP CONSTRAINT "UserRoles_fk_role_fkey";

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "UserRoles_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_fk_permission_fkey" FOREIGN KEY ("fk_permission") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaRecurso" ADD CONSTRAINT "ListaRecurso_fk_recurso_fkey" FOREIGN KEY ("fk_recurso") REFERENCES "Recurso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Declaracao" ADD CONSTRAINT "Declaracao_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Declaracao" ADD CONSTRAINT "Declaracao_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reconfirmacao" ADD CONSTRAINT "Reconfirmacao_fk_frequencia_fkey" FOREIGN KEY ("fk_frequencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_frquencia_fkey" FOREIGN KEY ("fk_frquencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_disciplina_fkey" FOREIGN KEY ("fk_disciplina") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameEspecial" ADD CONSTRAINT "ExameEspecial_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_frquencia_fkey" FOREIGN KEY ("fk_frquencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_disciplina_fkey" FOREIGN KEY ("fk_disciplina") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadeiraAtraso" ADD CONSTRAINT "CadeiraAtraso_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_frquencia_fkey" FOREIGN KEY ("fk_frquencia") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_disciplina_fkey" FOREIGN KEY ("fk_disciplina") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileUser" ADD CONSTRAINT "ProfileUser_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_mes_fkey" FOREIGN KEY ("fk_mes") REFERENCES "Mes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_semestre_fkey" FOREIGN KEY ("fk_semestre") REFERENCES "Semestre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propina" ADD CONSTRAINT "Propina_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoLectivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_fk_tipo_fkey" FOREIGN KEY ("fk_tipo") REFERENCES "TipoServico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursoFrequencia" ADD CONSTRAINT "CursoFrequencia_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursoFrequencia" ADD CONSTRAINT "CursoFrequencia_fk_ano_fkey" FOREIGN KEY ("fk_ano") REFERENCES "AnoFrequencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagamentoFolha" ADD CONSTRAINT "PagamentoFolha_fk_estudante_fkey" FOREIGN KEY ("fk_estudante") REFERENCES "Estudante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
