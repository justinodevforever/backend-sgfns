const { Router } = require("express");
const {
  createPermissao,
  getPermissao,
  deletePermissao,
  updatePermissao,
  getPermissoes,
} = require("../controllers/controllerPermissao");

const router = Router();

router.post("/permissao", createPermissao);
router.get("/permissao", getPermissoes);
router.get("/permissao/:id", getPermissao);
router.delete("/permissao/:id", deletePermissao);
router.put("/permissao/:id", updatePermissao);

module.exports = router;
