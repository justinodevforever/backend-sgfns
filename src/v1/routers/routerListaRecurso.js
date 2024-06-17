const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createListaRecurso,
  getListaRecurso,
  deleteListaRecurso,
  upDateListaRecurso,
  getListaRecursos,
  getListaRecursosEspecifica,
} = require("../controllers/controllerListaRecurso");

const router = Router();

router.post("/listarecurso", authorization, createListaRecurso);
router.get("/listarecurso", authorization, getListaRecursos);
router.delete("/listarecurso/:id", authorization, deleteListaRecurso);
router.put("/listarecurso/:id", authorization, upDateListaRecurso);
router.get("/listarecurso/:id", authorization, getListaRecurso);
router.post(
  "/listarecurso/especifica/",
  authorization,
  getListaRecursosEspecifica
);

module.exports = router;
