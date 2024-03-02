const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createlikeComunicado,
  getLikeComunicados,
  getLikeComunicado,
  getlikeComunicadoEspecific,
  upDatelikeComunicado,
  deletelikeComunicado,
  getlikeComunicadoEspecificUser,
  CountlikeComunicado,
} = require("../controllers/controllerLikeComunicado");

const router = Router();

router.post("/like/comunicado", authorization, createlikeComunicado);
router.get("/like/comunicado", authorization, getLikeComunicados);
router.get("/like/comunicado/:id", authorization, getLikeComunicado);
router.post(
  "/like/comunicado/specific",
  authorization,
  getlikeComunicadoEspecific
);
router.put("/like/comunicado/:id", authorization, upDatelikeComunicado);
router.delete("/like/comunicado/:id", authorization, deletelikeComunicado);
router.post(
  "/like/comunicado/specificuser",
  authorization,
  getlikeComunicadoEspecificUser
);
router.post("/like/comunicado/count", authorization, CountlikeComunicado);

module.exports = router;
