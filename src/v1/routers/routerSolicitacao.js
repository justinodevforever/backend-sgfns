const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createSolicitacao,
  getSolicitacao,
  getSolicitacoes,
  getSolicitacaoEspecific,
  removeSolicitacao,
  updateSolicitacao,
} = require("../controllers/controllerSolicitacao");
const router = Router();

router.post("/solicitacao", authorization, createSolicitacao);
router.get("/solicitacao", authorization, getSolicitacoes);
router.get("/solicitacao/:id", authorization, getSolicitacao);
router.post("/solicitacao/specific", authorization, getSolicitacaoEspecific);
router.delete("/solicitacao/:id", authorization, removeSolicitacao);
router.post("/solicitacao/:id", authorization, updateSolicitacao);

module.exports = router;
