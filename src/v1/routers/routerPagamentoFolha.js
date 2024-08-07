const express = require("express");
const router = express();
const { authorization } = require("../../authorization/auth");
const {
  createPagamentoFolha,
  getPagamentoFolhas,
  getPagamentoFolha,
  UpdatePagamentoFolha,
  deletePagamentoFolha,
  movimentoPagamentoFolha,
} = require("../controllers/controllerPagamentoFolha");

router.post("/folha", authorization, createPagamentoFolha);
router.get("/folha", authorization, getPagamentoFolhas);
router.get("/folha/:id", authorization, getPagamentoFolha);
router.put("/folha/:id", authorization, UpdatePagamentoFolha);
router.delete("/folha/:id", authorization, deletePagamentoFolha);
router.post(
  "/folha/movimento_financeiro",
  authorization,
  movimentoPagamentoFolha
);

module.exports = router;
