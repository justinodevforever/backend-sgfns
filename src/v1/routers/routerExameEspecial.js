const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createExameEspecial,
  getExameEspecials,
  getExameEspecial,
  deleteExameEspecials,
  upDateExameEspecial,
  getExameEspecialEspecifico,
  buscarCadeira,
  movimentoExameEspecial,
} = require("../controllers/controllerExameEspecial");

const router = Router();

router.post("/exame/especial", authorization, createExameEspecial);
router.get("/exame/especial", authorization, getExameEspecials);
router.get("/exame/especial/:id", authorization, getExameEspecial);
router.delete("/exame/especial/:id", authorization, deleteExameEspecials);
router.put("/exame/especial/:id", authorization, upDateExameEspecial);
router.get(
  "/exame/especial/especifico/:id",
  authorization,
  getExameEspecialEspecifico
);
router.post("/exame/especial/busca", authorization, buscarCadeira);
router.post(
  "/exame/especial/movimento_financeiro",
  authorization,
  movimentoExameEspecial
);

module.exports = router;
