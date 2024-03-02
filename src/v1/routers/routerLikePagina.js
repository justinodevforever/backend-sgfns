const { Router } = require("express");
const { authorization } = require("../../authorization/auth");
const {
  createLikePagina,
  getLikePaginas,
  getLikePagina,
  getLikePaginaEspecific,
  upDateLikePagina,
  deleteLikePagina,
  getLikePaginaEspecificUser,
  CountLikePagina,
} = require("../controllers/controllerLikePagina");

const router = Router();

router.post("/like/pagina", authorization, createLikePagina);
router.get("/like/pagina", authorization, getLikePaginas);
router.get("/like/pagina/:id", authorization, getLikePagina);
router.post("/like/pagina/specific", authorization, getLikePaginaEspecific);
router.put("/like/pagina/:id", authorization, upDateLikePagina);
router.delete("/like/pagina/:id", authorization, deleteLikePagina);
router.post(
  "/like/pagina/specificuser",
  authorization,
  getLikePaginaEspecificUser
);
router.post("/like/pagina/count", authorization, CountLikePagina);

module.exports = router;
