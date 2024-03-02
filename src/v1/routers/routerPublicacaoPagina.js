const { Router } = require("express");
const {
  createPublicationPage,
  getPublicationsPages,
  getPublicationPage,
  upDatePublicationPage,
  deletePublicationPage,
  getPublicationsPagesEspecific,
} = require("../controllers/controllerPublicacaoPagina");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/publication/page", authorization, createPublicationPage);
router.post(
  "/publication/page/especific",
  authorization,
  getPublicationsPagesEspecific
);
router.get("/publication/page", authorization, getPublicationsPages);
router.get("/publication/page/:id", authorization, getPublicationPage);
router.put("/publication/page/:id", authorization, upDatePublicationPage);
router.delete("/publication/page/:id", authorization, deletePublicationPage);

module.exports = router;
