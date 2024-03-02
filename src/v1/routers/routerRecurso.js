const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createRecurso,
  getRecursos,
  getRecurso,
  deleteRecursos,
  upDateRecurso,
  getRecursoEspecifico,
  buscarCadeira,
} = require("../controllers/controllerRecurso");

const router = Router();

router.post("/recurso", authorization, createRecurso);
router.post("/recurso/especifico", authorization, getRecursoEspecifico);
router.post("/recurso/busca", authorization, buscarCadeira);
router.get("/recurso", authorization, getRecursos);
router.get("/recurso/:id", authorization, getRecurso);
router.delete("/recurso/:id", authorization, deleteRecursos);
router.put("/recurso/:id", authorization, upDateRecurso);

module.exports = router;
