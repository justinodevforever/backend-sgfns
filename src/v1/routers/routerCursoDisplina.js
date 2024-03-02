const { Router } = require("express");
const {
  createCursoDisciplina,
  getCursosDisciplina,
  getCursoDisciplina,
  deleteCursoDisciplina,
  upDateCursoDisciplina,
} = require("../controllers/controllerCursoDisciplina");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/curso/disciplina", authorization, createCursoDisciplina);
router.get("/cursos/disciplina", authorization, getCursosDisciplina);
router.get("/curso/disciplina/:id", authorization, getCursoDisciplina);
router.delete("/curso/disciplina/:id", authorization, deleteCursoDisciplina);
router.put("/curso/disciplina/:id", authorization, upDateCursoDisciplina);

module.exports = router;
