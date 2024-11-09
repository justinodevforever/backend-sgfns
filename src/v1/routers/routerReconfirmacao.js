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
  movimentoPropina,
  listaReconfirmacao,
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
router.post("/lista_reconfirmacao", authorization, listaReconfirmacao);
router.get(
  "/reconfirmacao/especifico/:id",
  authorization,
  getReconfirmacaoEspecifico
);
router.post(
  "/reconfirmacao/atualizacao",
  authorization,
  getReconfirmacaoAtualizacao
);
router.post(
  "/reconfirmacao/movimento_financeiro",
  authorization,
  movimentoPropina
);

module.exports = router;
