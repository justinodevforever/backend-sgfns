const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createContactUsuario,
  getContactUsuario,
  getContactsusuario,
  ContactUsuario,
  Contactusuariopecific,
  deleteContactUsuario,
  upDateContactUsuario,
  findContact,
  ContactusuarioAdmin,
  ContactusuarioSec,
} = require("../controllers/controllerContactoUsuario");

const router = Router();

router.post("/contact/user", authorization, createContactUsuario);
router.get("/contact/user", authorization, getContactsusuario);
router.get("/contact/users/:id", authorization, getContactUsuario);
router.get("/contact/user/:userId", authorization, ContactUsuario);
router.post("/contact/users/specific", authorization, Contactusuariopecific);
router.delete("/contact/user/:id", authorization, deleteContactUsuario);
router.put("/contact/user/:id", authorization, upDateContactUsuario);
router.post("/contact/findUser/", authorization, findContact);
router.post("/contact/useradmin/", authorization, ContactusuarioAdmin);
router.post("/contact/usersec/", authorization, ContactusuarioSec);

module.exports = router;
