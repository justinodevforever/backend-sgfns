const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createLikeComentarioPublicacao,
  getLikeComentarioPublicacoes,
  getLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecific,
  upDateLikeComentarioPublicacao,
  deleteLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecificUser,
  CountLikeComentarioPublicacao,
} = require("../controllers/controllerLikeComentarioPublicacao");

const router = Router();

router.post(
  "/like/coment/publicacao",
  authorization,
  createLikeComentarioPublicacao
);
router.get(
  "/like/coment/publicacao",
  authorization,
  getLikeComentarioPublicacoes
);
router.get(
  "/like/coment/publicacao/:id",
  authorization,
  getLikeComentarioPublicacao
);
router.post(
  "/like/coment/publicacao/specific",
  authorization,
  getLikeComentarioPublicacaoEspecific
);
router.put(
  "/like/coment/publicacao/:id",
  authorization,
  upDateLikeComentarioPublicacao
);
router.delete(
  "/like/coment/publicacao/:id",
  authorization,
  deleteLikeComentarioPublicacao
);
router.post(
  "/like/coment/publicacao/specificuser",
  authorization,
  getLikeComentarioPublicacaoEspecificUser
);
router.post(
  "/like/coment/publicacao/count",
  authorization,
  CountLikeComentarioPublicacao
);

module.exports = router;
