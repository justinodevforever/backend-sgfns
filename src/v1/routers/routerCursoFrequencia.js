const { Router } = require("express");
const {
  createCursoFrequencia,
  getCursoFrequencia,
  deleteCursoFrequencia,
  upDateCursoFrequencia,
  getCursoFrequencias,
  CursoFrequenciaEspecifico,
} = require("../controllers/controllerCursoFrequencia");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/frequencia", authorization, createCursoFrequencia);
router.post("/frequencia/especifico", authorization, CursoFrequenciaEspecifico);
router.get("/frequencia", authorization, getCursoFrequencias);
router.get("/frequencia/:id", authorization, getCursoFrequencia);
router.delete("/frequencia/:id", authorization, deleteCursoFrequencia);
router.put("/frequencia/:id", authorization, upDateCursoFrequencia);

module.exports = router;
