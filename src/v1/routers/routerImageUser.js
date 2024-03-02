const Router = require("express");
const multerConfig = require("../../config/multer");
const multer = require("multer");

const { authorization } = require("../../authorization/auth");
const {
  createImageUser,
  removeImageUser,
  getImagesUser,
  imagesUser,
} = require("../controllers/controllerImageUser");

const router = Router();

router.post(
  "/image/user",
  multer(multerConfig).single("file"),
  createImageUser
);
router.delete("/image/user/:id", authorization, removeImageUser);
router.post("/images/user", authorization, getImagesUser);
router.get("/images/user", authorization, imagesUser);

module.exports = router;
