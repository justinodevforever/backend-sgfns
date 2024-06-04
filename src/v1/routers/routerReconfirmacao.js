const { Router } = require("express");
const {
  createReconfirmacao,
  getReconfirmacao,
  deleteReconfirmacao,
  upDateReconfirmacao,
  getReconfirmacoes,
  getReconfirmacaoRelatorio,
  getReconfirmacaoEspecifico,
  getReconfirmacaoAtualizacao,
} = require("../controllers/controllerReconfirmacao");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/reconfirmacao", authorization, createReconfirmacao);
router.post(
  "/reconfirmacao/relatorio",
  authorization,
  getReconfirmacaoRelatorio
);
router.get("/reconfirmacao", authorization, getReconfirmacoes);
router.get("/reconfirmacao/:id", authorization, getReconfirmacao);
router.delete("/reconfirmacao/:id", authorization, deleteReconfirmacao);
router.put("/reconfirmacao/:id", authorization, upDateReconfirmacao);
router.post(
  "/reconfirmacao/especifico",
  authorization,
  getReconfirmacaoEspecifico
);
router.post(
  "/reconfirmacao/atualizacao",
  authorization,
  getReconfirmacaoAtualizacao
);

module.exports = router;
