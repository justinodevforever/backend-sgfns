const { Router } = require("express");
const {
  createUsuarioPermissoes,
  getUsuariosPermissoes,
  getUsuarioPermissoes,
  deleteUsuarioPermissoes,
  updateUsuarioPermissoes,
  getUsuarioPermissoesChat,
} = require("../controllers/controllerUsuarioPermissao");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/permissaousuario", authorization, createUsuarioPermissoes);
router.get("/permissaousuario", authorization, getUsuariosPermissoes);
router.get("/permissaousuario/:id", authorization, getUsuarioPermissoes);
router.delete("/permissaousuario/:id", authorization, deleteUsuarioPermissoes);
router.put("/permissaousuario/:id", authorization, updateUsuarioPermissoes);
router.get("/permissaousuariochat", authorization, getUsuarioPermissoesChat);

module.exports = router;
