const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, "..", "public", "upload", "imagePagina"),

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.resolve(__dirname, "..", "public", "upload", "imagePagina")
      );
    },

    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          cb(err);
        }
        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),

  limits: {
    fileSize: 4 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new error("tipo de imagem invalido!"));
    }
  },
};
