const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createLikePublicacao,
  getLikePublicacoes,
  getLikePublicacao,
  getLikePublicacaoEspecific,
  upDateLikePublicacao,
  deleteLikePublicacao,
  getLikePublicacaoEspecificUser,
  CountLikePublicacao,
} = require("../controllers/controllerLikePublicacao");

const router = Router();

router.post("/like/publicacao", authorization, createLikePublicacao);
router.get("/like/publicacao", authorization, getLikePublicacoes);
router.get("/like/publicacao/:id", authorization, getLikePublicacao);
router.post(
  "/like/publicacao/specific",
  authorization,
  getLikePublicacaoEspecific
);
router.put("/like/publicacao/:id", authorization, upDateLikePublicacao);
router.delete("/like/publicacao/:id", authorization, deleteLikePublicacao);
router.post(
  "/like/publicacao/specificuser",
  authorization,
  getLikePublicacaoEspecificUser
);
router.post("/like/publicacao/count", authorization, CountLikePublicacao);

module.exports = router;
