/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Estudante_fk_curso_key";

-- DropIndex
DROP INDEX "Estudante_fk_user_key";

-- DropIndex
DROP INDEX "ExameEspecial_valor_key";

-- DropIndex
DROP INDEX "ProfilePublicacao_fk_publicacao_key";

-- DropIndex
DROP INDEX "ProfileUser_fk_user_key";

-- DropIndex
DROP INDEX "Propina_valor_key";

-- DropIndex
DROP INDEX "Publicacao_publicacao_key";

-- DropIndex
DROP INDEX "Recurso_valor_key";

-- DropTable
DROP TABLE "User";
