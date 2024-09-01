const { Router } = require("express");
const {
  createMatricula,
  getMatriculas,
  upDateMatricula,
  deleteMatricula,
  getMatriculaEspecifico,
  getAllMatricula,
  searchMatricula,
  buscaMatriculaPorBi,
  getMatriculaPorUsuario,
  getMatricula,
  relatorioMatricula,
  count,
  countMatricula,
} = require("../controllers/controllerMatricula");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/matricula", authorization, createMatricula);
router.get("/matricula", authorization, getMatriculas);
router.get("/matricula/:id", authorization, getMatricula);
router.put("/matricula/:id", authorization, upDateMatricula);
router.delete("/matricula/:id", authorization, deleteMatricula);
router.post("/matricula/specific", authorization, getMatriculaEspecifico);
router.post("/all/matricula", authorization, getAllMatricula);
router.post("/search/matricula", authorization, searchMatricula);
router.post("/search/matricula/bi", authorization, buscaMatriculaPorBi);
router.post("/matricula/user", authorization, getMatriculaPorUsuario);
router.post("/relatorio/matricula", authorization, relatorioMatricula);
// router.post("/countmatricula", authorization, countMatricula);

module.exports = router;
