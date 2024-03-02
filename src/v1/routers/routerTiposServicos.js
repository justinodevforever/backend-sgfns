const { Router } = require("express");
const {
  createTiposServicos,
  getTiposServicos,
  deleteTiposServicos,
  upDateTiposServicos,
  getTiposServicoss,
  getTiposServicosEspecifico,
} = require("../controllers/controllerTiposServicos");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/tipo/servico", authorization, createTiposServicos);
router.post(
  "/tipo/servico/especifico",
  authorization,
  getTiposServicosEspecifico
);
router.get("/tipo/servico", authorization, getTiposServicoss);
router.get("/tipo/servico/:id", authorization, getTiposServicos);
router.delete("/tipo/servico/:id", authorization, deleteTiposServicos);
router.put("/tipo/servico/:id", authorization, upDateTiposServicos);

module.exports = router;
