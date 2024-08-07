const { Router } = require("express");
const {
  createEstudante,
  getEstudantes,
  upDateEstudante,
  deleteEstudante,
  getEstudanteEspecifico,
  getAllEstudante,
  searchEstudante,
  buscaEstudantePorBi,
  getEstudantePorUsuario,
  getEstudante,
} = require("../controllers/controllerEstudante");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/estudante", authorization, createEstudante);
router.get("/estudante", authorization, getEstudantes);
router.get("/estudante/:id", authorization, getEstudante);
router.put("/estudante/:id", authorization, upDateEstudante);
router.delete("/estudante/:id", authorization, deleteEstudante);
router.post("/estudante/specific", authorization, getEstudanteEspecifico);
router.post("/allEstudante", authorization, getAllEstudante);
router.post("/search/estudante", authorization, searchEstudante);
router.post("/search/estudante/bi", authorization, buscaEstudantePorBi);
router.post("/estudante/user", authorization, getEstudantePorUsuario);

module.exports = router;
