const { Router } = require("express");
const {
  createSemestre,
  getSemestre,
  deleteSemestre,
  upDateSemestre,
  getSemestres,
  buscaSemestre,
} = require("../controllers/controllerSemestre");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/semestre", authorization, createSemestre);
router.post("/search/semestre", authorization, buscaSemestre);
router.get("/semestre", authorization, getSemestres);
router.get("/semestre/:id", authorization, getSemestre);
router.delete("/semestre/:id", authorization, deleteSemestre);
router.put("/semestre/:id", authorization, upDateSemestre);

module.exports = router;
