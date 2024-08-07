const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createCadeiraAtraso,
  getCadeiraAtrasos,
  getCadeiraAtraso,
  deleteCadeiraAtrasos,
  upDateCadeiraAtraso,
  getCadeiraAtrazoEspecifico,
  buscarCadeira,
  movimentoCadeiraAtraso,
} = require("../controllers/controllerCadeiraAtraso");

const router = Router();

router.post("/cadeira/atraso", authorization, createCadeiraAtraso);
router.get("/cadeira/atraso", authorization, getCadeiraAtrasos);
router.get("/cadeira/atraso/:id", authorization, getCadeiraAtraso);
router.delete("/cadeira/atraso/:id", authorization, deleteCadeiraAtrasos);
router.put("/cadeira/atraso/:id", authorization, upDateCadeiraAtraso);
router.post(
  "/cadeira/atraso/especifico",
  authorization,
  getCadeiraAtrazoEspecifico
);
router.post("/cadeira/atraso/busca", authorization, buscarCadeira);
router.post(
  "/cadeira/atraso/movimento_financeiro",
  authorization,
  movimentoCadeiraAtraso
);

module.exports = router;
