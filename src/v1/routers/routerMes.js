const { Router } = require("express");
const {
  createMes,
  getMes,
  deleteMes,
  upDateMes,
  getMeses,
  buscaMes,
} = require("../controllers/controllerMes");
const { authorization } = require("../../authorization/auth");
const router = Router();

router.post("/mes", authorization, createMes);
router.post("/search/mes", authorization, buscaMes);
router.get("/mes", authorization, getMeses);
router.get("/mes/:id", authorization, getMes);
router.delete("/mes/:id", authorization, deleteMes);
router.put("/mes/:id", authorization, upDateMes);

module.exports = router;
