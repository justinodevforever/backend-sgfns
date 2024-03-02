const { Router } = require("express");
const multer = require("multer");
const multerConfig = require("../../config/multerPage");
const {
  createImagePage,
  getImagePage,
  removeImagePage,
  getImagesPages,
} = require("../controllers/controllerImagePagina");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post(
  "/image/page",
  multer(multerConfig).single("file"),
  createImagePage
);
router.post("/image/page", authorization, getImagePage);
router.get("/image/page", authorization, getImagesPages);
router.delete("/image/page/:id", authorization, removeImagePage);

module.exports = router;
