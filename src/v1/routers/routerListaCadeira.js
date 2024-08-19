const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createListaCadeira,
  getListaCadeiras,
  deleteListaCadeira,
  upDateListaCadeira,
  getListaCadeira,
  getListaCadeirasEspecifica,
} = require("../controllers/controllerListaCadeira");

const router = Router();

router.post("/listacadeira", authorization, createListaCadeira);
router.get("/listacadeira", authorization, getListaCadeiras);
router.delete("/listacadeira/:id", authorization, deleteListaCadeira);
router.put("/listacadeira/:id", authorization, upDateListaCadeira);
router.get("/listacadeira/:id", authorization, getListaCadeira);
router.post(
  "/listacadeira/especifica/",
  authorization,
  getListaCadeirasEspecifica
);

module.exports = router;
