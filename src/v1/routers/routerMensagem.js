const { Router } = require("express");
const {
  createMensagem,
  getMensagens,
  getMensagem,
  upDateMensagem,
  deleteMensagem,
  getMensagemporNome,
  getMensagemporNomeOrder,
  getMensagemNaoLida,
} = require("../controllers/controllerMensagem");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/message", authorization, createMensagem);
router.get("/getmensagens", authorization, getMensagens);
router.get("/getmensagem/:id", authorization, getMensagem);
router.put("/updatemensagem/:id", authorization, upDateMensagem);
router.delete("/deletemensagem/:id", authorization, deleteMensagem);
router.get("/message/:contactId", authorization, getMensagemporNome);
router.get("/message/order/:contactId", authorization, getMensagemporNomeOrder);
router.get("/message/naolida/:contactId", authorization, getMensagemNaoLida);
module.exports = router;
