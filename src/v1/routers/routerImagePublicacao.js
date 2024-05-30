const { Router } = require("express");
const multer = require("multer");
const multerConfig = require("../../config/multer");
const {
  createImagePublicacao,
  getImagePublicacao,
  updateImagePublicacao,
  deleteImagePublicacao,
  getImagePublication,
} = require("../controllers/controllerImagePublicacao");
const { authorization } = require("../../authorization/auth");
const uploadImage = require("../../service/firebase");

const router = Router();

router.post(
  "/image/publication",
  multer(multerConfig).single("file"),
  uploadImage,
  createImagePublicacao
);
router.post("/image/publication/specific", authorization, getImagePublication);
router.get("/image/publication", authorization, getImagePublicacao);
router.put("/image/publication/:id", authorization, updateImagePublicacao);
router.delete("/image/publication/:id", authorization, deleteImagePublicacao);

module.exports = router;
