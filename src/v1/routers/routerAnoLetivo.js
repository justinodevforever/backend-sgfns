const { Router } = require("express");
const {
  createAnoLetivo,
  getAnoLetivos,
  getAnoLetivo,
  deleteAnoLetivo,
  upDateAnoLetivo,
  buscaAnoLetivo,
  anoLetivoEspecifico,
} = require("../controllers/controllerAnoLetivo");
const { authorization } = require("../../authorization/auth");
const router = Router();

router.post("/letivo", authorization, createAnoLetivo);
router.post("/search/letivo", authorization, buscaAnoLetivo);
router.get("/letivo", authorization, getAnoLetivos);
router.get("/letivo/:id", authorization, getAnoLetivo);
router.delete("/letivo/:id", authorization, deleteAnoLetivo);
router.put("/letivo/:id", authorization, upDateAnoLetivo);
router.get("/anoespecifico/:id", authorization, anoLetivoEspecifico);

module.exports = router;
