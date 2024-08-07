const { Router } = require("express");
const {
  createServico,
  getServico,
  deleteServico,
  upDateServico,
  getServicos,
  getServisoEspecifico,
} = require("../controllers/controllerServico");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/servico", authorization, createServico);
router.post("/serviso/especifico", authorization, getServisoEspecifico);
router.get("/servico", authorization, getServicos);
router.get("/servico/:id", authorization, getServico);
router.delete("/servico/:id", authorization, deleteServico);
router.put("/servico/:id", authorization, upDateServico);

module.exports = router;
