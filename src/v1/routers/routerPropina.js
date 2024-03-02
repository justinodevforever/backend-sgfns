const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createPropina,
  getPropina,
  deletePropina,
  upDatePropina,
  getPropinas,
  getEstudantePropina,
  getPropinasAnual,
  getPropinasMensal,
  getPropinaEspecifico,
} = require("../controllers/controllerPropina");

const router = Router();

router.post("/propina", authorization, createPropina);
router.post("/propina/anual", authorization, getPropinasAnual);
router.post("/propina/mensal", authorization, getPropinasMensal);
router.get("/propina", authorization, getPropinas);
router.delete("/propina/:id", authorization, deletePropina);
router.put("/propina/:id", authorization, upDatePropina);
router.get("/propina/:id", authorization, getPropina);
router.get("/estudante/propina/:id/:ano", authorization, getEstudantePropina);
router.get("/propina/especifico", authorization, getPropinaEspecifico);

module.exports = router;
