const Router = require("express");
const multerConfig = require("../../config/multer");
const multer = require("multer");

const { authorization } = require("../../authorization/auth");
const {
  createImageUser,
  removeImageUser,
  getImagesUser,
  imagesUser,
  upDateImageUSer,
} = require("../controllers/controllerImageUser");
const uploadImage = require("../../service/firebase");

const router = Router();

router.post(
  "/image/user",
  multer(multerConfig).single("file"),
  uploadImage,
  createImageUser
);
router.delete("/image/user/:id", authorization, removeImageUser);
router.post("/images/user", authorization, getImagesUser);
router.get("/images/user", authorization, imagesUser);
router.put("/images/:id", authorization, upDateImageUSer);

module.exports = router;
