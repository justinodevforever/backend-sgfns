const { Router } = require("express");
const {
  createCurso,
  deleteCurso,
  upDateCurso,
  getCursos,
  getCurso,
  getCursoEspecifico,
  cursoEspecifico,
} = require("../controllers/controllerCursos");
const { authorization } = require("../../authorization/auth");
const { movimentoRecurso } = require("../controllers/controllerRecurso");

const router = Router();

router.post("/curso", authorization, createCurso);
router.post("/curso/especifico", authorization, getCursoEspecifico);
router.get("/curso", authorization, getCursos);
router.get("/cursos", getCursos);
router.get("/curso/:id", authorization, getCurso);
router.delete("/curso/:id", authorization, deleteCurso);
router.put("/curso/:id", authorization, upDateCurso);
router.post("/recurso/movimento_financeiro", authorization, movimentoRecurso);
router.get("/courseespecific/:id", authorization, cursoEspecifico);

module.exports = router;
