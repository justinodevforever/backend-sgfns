const { Router } = require("express");
const {
  createUsuarioSistema,
  getUsuariosSistema,
  getUsuarioSistema,
  deleteUsuarioSistema,
  updateUsuarioSistema,
} = require("../controllers/controllerUsuarioSistema");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/usuario/sistema", createUsuarioSistema);
router.get("/usuario/sistema", authorization, getUsuariosSistema);
router.get("/usuario/sistema/:id", authorization, getUsuarioSistema);
router.delete("/usuario/sistema/:id", authorization, deleteUsuarioSistema);
router.put("/usuario/sistema", authorization, updateUsuarioSistema);

module.exports = router;
