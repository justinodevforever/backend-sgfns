const { Router } = require("express");
const {
  createUsuarioPermissoes,
  getUsuariosPermissoes,
  getUsuarioPermissoes,
  deleteUsuarioPermissoes,
  updateUsuarioPermissoes,
} = require("../controllers/controllerUsuarioPermissao");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/user/permissao", authorization, createUsuarioPermissoes);
router.get("/user/permissao", authorization, getUsuariosPermissoes);
router.get("/user/permissao/:id", authorization, getUsuarioPermissoes);
router.delete("/user/permissao/:id", authorization, deleteUsuarioPermissoes);
router.put("/user/permissao/:id", authorization, updateUsuarioPermissoes);

module.exports = router;
