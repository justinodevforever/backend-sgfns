const { Router } = require("express");
const {
  createPermissao,
  getPermissao,
  deletePermissao,
  updatePermissao,
  getPermissoes,
} = require("../controllers/controllerPermissao");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/permissao", authorization, createPermissao);
router.get("/permissao", authorization, getPermissoes);
router.get("/permissao/:id", authorization, getPermissao);
router.delete("/permissao/:id", authorization, deletePermissao);
router.put("/permissao/:id", authorization.updatePermissao);

module.exports = router;
