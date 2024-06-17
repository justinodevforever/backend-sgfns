const { Router } = require("express");
const {
  createDisciplina,
  deleteDisciplina,
  getDisciplina,
  upDateDisciplina,
  getDisciplinas,
  DisciplinasEspecifico,
  DisciplinasPorAnoCurso,
  searchDisciplina,
  getDisciplinaPorCursoFrequencia,
} = require("../controllers/controllerDisciplina");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/disciplina", authorization, createDisciplina);
router.post("/disciplina/especifico", authorization, DisciplinasEspecifico);
router.get("/disciplina", authorization, getDisciplinas);
router.get("/disciplina/:id", authorization, getDisciplina);
router.delete("/disciplina/:id", authorization, deleteDisciplina);
router.put("/disciplina/:id", authorization, upDateDisciplina);
router.post("/search/disciplina", authorization, searchDisciplina);
router.post("/disciplina/restringido", authorization, DisciplinasPorAnoCurso);
router.post(
  "/disciplina/curso",
  authorization,
  getDisciplinaPorCursoFrequencia
);

module.exports = router;
