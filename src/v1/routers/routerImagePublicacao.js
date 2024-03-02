const { Router } = require("express");
const multer = require("multer");
const multerConfig = require("../../config/multerImagePublicacao");
const {
  createImagePublicacao,
  getImagePublicacao,
  updateImagePublicacao,
  deleteImagePublicacao,
  getImagePublication,
} = require("../controllers/controllerImagePublicacao");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post(
  "/image/publication",
  multer(multerConfig).single("file"),
  createImagePublicacao
);
router.post("/images/publication", authorization, getImagePublication);
router.get("/image/publication", authorization, getImagePublicacao);
router.put("/image/publication/:id", authorization, updateImagePublicacao);
router.delete("/image/publication/:id", authorization, deleteImagePublicacao);

module.exports = router;
