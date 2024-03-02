const { Router } = require("express");

const { authorization } = require("../../authorization/auth");
const {
  createPublicacao,
  getPublicacoes,
  getPublicacao,
  upDatePublicacao,
  deletePublicacao,
  getPublicacaoPerfil,
} = require("../controllers/controllerPublicacao");

const router = Router();

router.post("/publicacao", authorization, createPublicacao);
router.get("/publicacao", authorization, getPublicacoes);
router.get("/publicacao/:id", authorization, getPublicacao);
router.put("/publicacao/:id", authorization, upDatePublicacao);
router.delete("/publicacao/:id", authorization, deletePublicacao);
router.post("/publicacao/perfil", authorization, getPublicacaoPerfil);

module.exports = router;
