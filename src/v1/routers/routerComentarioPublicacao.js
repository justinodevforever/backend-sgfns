const { Router } = require("express");
const {
  createComentarioPublicacao,
  getComentariosPublicacoes,
  getComentarioPublicacao,
  upDatecomentarioPublicacao,
  deleteComentarioPublicacao,
  getComentSpecific,
  count,
} = require("../controllers/controllerComentarioPublicacao");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post(
  "/comentario/publicacao",
  authorization,
  createComentarioPublicacao
);
router.post(
  "/comentario/publicacao/specific",
  authorization,
  getComentSpecific
);
router.get("/comentarios/publicacao", authorization, getComentariosPublicacoes);
router.get(
  "/comentario/publicacao/:id",
  authorization,
  getComentarioPublicacao
);
router.put(
  "/comentario/publicacao/:id",
  authorization,
  upDatecomentarioPublicacao
);
router.delete(
  "/comntario/publicacao/:id",
  authorization,
  deleteComentarioPublicacao
);
router.post("/count/publicacao", authorization, count);
module.exports = router;
