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
} = require("../controllers/controllerExameEspecial");

const router = Router();

router.post("/exame/especial", authorization, createExameEspecial);
router.get("/exame/especial", authorization, getExameEspecials);
router.get("/exame/especial/:id", authorization, getExameEspecial);
router.delete("/exame/especial/:id", authorization, deleteExameEspecials);
router.put("/exame/especial/:id", authorization, upDateExameEspecial);
router.post(
  "/exame/especial/especifico",
  authorization,
  getExameEspecialEspecifico
);
router.post("/exame/especial/busca", authorization, buscarCadeira);

module.exports = router;
