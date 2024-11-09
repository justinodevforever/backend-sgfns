const { Router } = require("express");

const { authorization } = require("../../authorization/auth");
const {
  createinscricaoMatricula,
  getinscricaoMatriculas,
  getinscricaoMatricula,
  upDateinscricaoMatricula,
  deleteinscricaoMatricula,
  getinscricaoMatriculaEspecifico,
  getAllinscricaoMatricula,
  searchinscricaoMatricula,
  buscainscricaoMatriculaPorBi,
  getinscricaoMatriculaPorUsuario,
  relatorioInscricao,
  listaInscricao,
} = require("../controllers/controllerInscricaoMatricula");

const router = Router();

router.post("/inscrincao/matricula", authorization, createinscricaoMatricula);
router.get("/inscrincao/matricula", authorization, getinscricaoMatriculas);
router.get("/inscrincao/matricula/:id", authorization, getinscricaoMatricula);
router.put(
  "/inscrincao/matricula/:id",
  authorization,
  upDateinscricaoMatricula
);
router.delete(
  "/inscrincao/matricula/:id",
  authorization,
  deleteinscricaoMatricula
);
router.post(
  "/inscrincao/matricula/specific",
  authorization,
  getinscricaoMatriculaEspecifico
);
router.post(
  "/all/inscrincao/matricula",
  authorization,
  getAllinscricaoMatricula
);
router.post(
  "/search/inscrincao/matricula",
  authorization,
  searchinscricaoMatricula
);
router.post(
  "/search/inscrincao/matricula/bi",
  authorization,
  buscainscricaoMatriculaPorBi
);
router.post(
  "/inscrincao/matricula/user",
  authorization,
  getinscricaoMatriculaPorUsuario
);
router.post("/relatorio/inscrincao", authorization, relatorioInscricao);
router.post("/listainscricao", authorization, listaInscricao);

module.exports = router;
