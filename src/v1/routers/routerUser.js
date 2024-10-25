const { Router } = require("express");
const multer = require("multer");

const {
  authorization,
  verifyRefreshToken,
} = require("../../authorization/auth");
const {
  logar,
  createUser,
  searchUser,
  getAllUser,
  upDateUser,
  deleteUser,
  verifyToken,
  getUserPorBi,
  getUser,
  getUserSomente,
  searchUserEmail,
  altearSenha,
} = require("../controllers/controllerUser");

const router = Router();

router.post("/logar", logar);
router.post("/user", createUser);
router.post("/alterar/senha", altearSenha);
router.post("/search/user", authorization, searchUser);
router.post("/search/user/email", searchUserEmail);
router.get("/user/:id", authorization, getUser);
router.get("/user", authorization, getAllUser);
router.put("/user/:id", authorization, upDateUser);
router.delete("/user/:id", authorization, deleteUser);
router.post("/refresh", verifyRefreshToken, verifyToken);
router.post("/user/bi", authorization, getUserPorBi);
router.get("/user/perfil/:id", authorization, getUserSomente);

module.exports = router;
