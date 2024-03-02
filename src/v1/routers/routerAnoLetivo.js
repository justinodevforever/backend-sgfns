const { Router } = require("express");
const {
  createAnoLetivo,
  getAnoLetivos,
  getAnoLetivo,
  deleteAnoLetivo,
  upDateAnoLetivo,
  buscaAnoLetivo,
} = require("../controllers/controllerAnoLetivo");
const { authorization } = require("../../authorization/auth");
const router = Router();

router.post("/letivo", authorization, createAnoLetivo);
router.post("/search/letivo", authorization, buscaAnoLetivo);
router.get("/letivo", authorization, getAnoLetivos);
router.get("/letivo/:id", authorization, getAnoLetivo);
router.delete("/letivo/:id", authorization, deleteAnoLetivo);
router.put("/letivo/:id", authorization, upDateAnoLetivo);
router.put("/letivo/:id", authorization, upDateAnoLetivo);

module.exports = router;
