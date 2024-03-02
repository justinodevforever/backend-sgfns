const { Router } = require("express");
const {
  createUsuarioRoles,
  getUsuariosRoles,
  getUsuarioRoles,
  deleteUsuarioRoles,
  updateUsuarioRoles,
  getUsuarioRolesEspecifico,
} = require("../controllers/controllerUsuarioRoles");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/usuario/roles", authorization, createUsuarioRoles);
router.get("/usuario/roles", authorization, getUsuariosRoles);
router.get("/usuario/especifico", authorization, getUsuarioRolesEspecifico);
router.get("/usuario/roles/:id", authorization, getUsuarioRoles);
router.delete("/usuario/roles/:id", authorization, deleteUsuarioRoles);
router.put("/usuario/roles/:id", authorization, updateUsuarioRoles);

module.exports = router;
