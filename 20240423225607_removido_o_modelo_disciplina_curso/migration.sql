/*
  Warnings:

  - You are about to drop the `DisciplinaCurso` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fk_curso` to the `Disciplina` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DisciplinaCurso" DROP CONSTRAINT "DisciplinaCurso_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "DisciplinaCurso" DROP CONSTRAINT "DisciplinaCurso_fk_disciplina_fkey";

-- AlterTable
ALTER TABLE "Disciplina" ADD COLUMN     "fk_curso" TEXT NOT NULL;

-- DropTable
DROP TABLE "DisciplinaCurso";

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
