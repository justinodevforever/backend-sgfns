const { Router } = require("express");
const nodemailer = require("nodemailer");

const {
  createAnoFrequencia,
  getAnoFrequencia,
  deleteAnoFrequencia,
  upDateAnoFrequencia,
  getAnoFrequencias,
  searchFrequencia,
} = require("../controllers/controllerAnoFrequencia");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/ano", authorization, createAnoFrequencia);
router.get("/ano", authorization, getAnoFrequencias);
router.get("/ano/:id", authorization, getAnoFrequencia);
router.delete("/ano/:id", authorization, deleteAnoFrequencia);
router.put("/ano/:id", authorization, upDateAnoFrequencia);
router.post("/ano/espeficico", authorization, upDateAnoFrequencia);
router.post("/search/frequencia", authorization, searchFrequencia);

module.exports = router;
