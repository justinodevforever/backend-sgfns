const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createLikeComentarioPagina,
  getLikeComentarioPaginas,
  getLikeComentarioPagina,
  getLikeComentarioPaginaEspecific,
  upDateLikeComentarioPagina,
  deleteLikeComentarioPagina,
  getLikeComentarioPaginaEspecificUser,
  CountLikeComentarioPagina,
} = require("../controllers/ControllerLikeComentarioPagina");

const router = Router();

router.post("/like/coment/page", authorization, createLikeComentarioPagina);
router.get("/like/coment/page", authorization, getLikeComentarioPaginas);
router.get("/like/coment/page/:id", authorization, getLikeComentarioPagina);
router.post(
  "/like/coment/page/specific",
  authorization,
  getLikeComentarioPaginaEspecific
);
router.put("/like/coment/page/:id", authorization, upDateLikeComentarioPagina);
router.delete(
  "/like/coment/page/:id",
  authorization,
  deleteLikeComentarioPagina
);
router.post(
  "/like/coment/page/specificuser",
  authorization,
  getLikeComentarioPaginaEspecificUser
);
router.post(
  "/like/coment/page/count",
  authorization,
  CountLikeComentarioPagina
);

module.exports = router;
