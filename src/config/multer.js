const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 4 * 1024 * 1024,
  },
};
