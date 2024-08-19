const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createListaExameEspecial,
  getListaExameEspecials,
  deleteListaExameEspecial,
  upDateListaExameEspecial,
  getListaExameEspecial,
  getListaExameEspecialsEspecifica,
} = require("../controllers/controllerListaExmeEspecial");

const router = Router();

router.post("/listaexame", authorization, createListaExameEspecial);
router.get("/listaexame", authorization, getListaExameEspecials);
router.delete("/listaexame/:id", authorization, deleteListaExameEspecial);
router.put("/listaexame/:id", authorization, upDateListaExameEspecial);
router.get("/listaexame/:id", authorization, getListaExameEspecial);
router.post(
  "/listaexame/especifica/",
  authorization,
  getListaExameEspecialsEspecifica
);

module.exports = router;
