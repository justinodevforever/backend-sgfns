const { Router } = require("express");
const {
  createComentarioPagina,
  getComentariosPaginas,
  getComentarioPagina,
  upDateComentarioPagina,
  deleteComentarioPagina,
  getComentariosPaginasEspecific,
  countComentPage,
} = require("../controllers/controllerComentarioPagina");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/coment/publication", authorization, createComentarioPagina);
router.get(
  "/coment/publication/especific/:id",
  authorization,
  getComentariosPaginasEspecific
);
router.get("/coment/publication", authorization, getComentariosPaginas);
router.get("/coment/publication/:id", authorization, getComentarioPagina);
router.put("/coment/publication/:id", authorization, upDateComentarioPagina);
router.delete("/coment/publication/:id", authorization, deleteComentarioPagina);
router.post("/count/coment/page", authorization, countComentPage);

module.exports = router;
