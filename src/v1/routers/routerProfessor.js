const { Router } = require("express");
const {
  createProfessor,
  deleteProfessor,
  getProfessor,
  upDateProfessor,
  getProfessores,
  logarSistema,
} = require("../controllers/controllerProfessor");

const router = Router();

router.post("/professor", createProfessor);
router.post("/logar/professor", logarSistema);
router.get("/professor", getProfessores);
router.get("/professor/:id", getProfessor);
router.delete("/professor/:id", deleteProfessor);
router.put("/professor/:id", upDateProfessor);

module.exports = router;
