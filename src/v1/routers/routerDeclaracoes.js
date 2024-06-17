const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createDeclaracoes,
  getDeclaracoes,
  deleteDeclaracoes,
  upDateDeclaracoes,
  getDeclaracao,
} = require("../controllers/controllerDeclaracoes");

const router = Router();

router.post("/declaracoes", authorization, createDeclaracoes);
router.get("/declaracoes", authorization, getDeclaracoes);
router.delete("/declaracoes/:id", authorization, deleteDeclaracoes);
router.put("/declaracoes/:id", authorization, upDateDeclaracoes);
router.get("/declaracoes/:id", authorization, getDeclaracao);

module.exports = router;
