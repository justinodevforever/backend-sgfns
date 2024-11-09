require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");
const cluster = require("cluster");
const os = require("os");

const roueterUser = require("./src/v1/routers/routerUser");
const routerEstudante = require("./src/v1/routers/routerEstudante");
const routerImageUSer = require("./src/v1/routers/routerImageUser");
const routerDeclaracoes = require("./src/v1/routers/routerDeclaracoes");
const routerUsuarioRoles = require("./src/v1/routers/routerUsuarioRoles");
const routerRoles = require("./src/v1/routers/routerRoles");
const routerPermissao = require("./src/v1/routers/routerPermissao");
const routerUsuarioPermissao = require("./src/v1/routers/routerUsuarioPermissoes");
const routerAnoFrequencia = require("./src/v1/routers/routerAnoFrequencia");
const routerAnoLetivo = require("./src/v1/routers/routerAnoLetivo");
const routerCurso = require("./src/v1/routers/routerCurso");
const routerDisciplina = require("./src/v1/routers/routerDisciplina");
const routerMes = require("./src/v1/routers/routerMes");
const routerReconfirmacao = require("./src/v1/routers/routerReconfirmacao");
const routerSemestre = require("./src/v1/routers/routerSemestre");
const routerTiposServicos = require("./src/v1/routers/routerTiposServicos");
const routerServicos = require("./src/v1/routers/routerServicos");
const routerCursoFrequencia = require("./src/v1/routers/routerCursoFrequencia");
const routerRecurso = require("./src/v1/routers/routerRecurso");
const routerCadeiraAtraso = require("./src/v1/routers/routerCadeiraAtraso");
const routerExameEspecial = require("./src/v1/routers/routerExameEspecial");
const routerPropina = require("./src/v1/routers/routerPropina");
const routerListaRecurso = require("./src/v1/routers/routerListaRecurso");
const routerFolha = require("./src/v1/routers/routerPagamentoFolha");
const routerMatricula = require("./src/v1/routers/routerMatricula");
const routerInscrincaoMatricula = require("./src/v1/routers/routerInscricaoMatricula");
const routerListaCadeira = require("./src/v1/routers/routerListaCadeira");
const routerListaExame = require("./src/v1/routers/routerListaExameEspecial");

require("./src/v1/database/db");

const app = express();
const server = http.createServer(app);
const numCPUs = os.cpus().length;
const io = new Server(server, {
  cors: {
    origin: process.env.URL_FRONT,
  },
});

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} falhou. Criando...`);
    cluster.fork();
  });
} else {
  //config
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/files",
    express.static(path.resolve(__dirname, "src", "public", "upload"))
  );

  app.use("/api/v1", roueterUser);
  app.use("/api/v1", routerEstudante);
  app.use("/api/v1", routerImageUSer);
  app.use("/api/v1", routerPropina);
  app.use("/api/v1", routerDeclaracoes);
  app.use("/api/v1", routerUsuarioRoles);
  app.use("/api/v1", routerRoles);
  app.use("/api/v1", routerPermissao);
  app.use("/api/v1", routerAnoFrequencia);
  app.use("/api/v1", routerAnoLetivo);
  app.use("/api/v1", routerCurso);
  app.use("/api/v1", routerDisciplina);
  app.use("/api/v1", routerUsuarioPermissao);
  app.use("/api/v1", routerCursoFrequencia);
  app.use("/api/v1", routerMes);
  app.use("/api/v1", routerTiposServicos);
  app.use("/api/v1", routerSemestre);
  app.use("/api/v1", routerServicos);
  app.use("/api/v1", routerReconfirmacao);
  app.use("/api/v1", routerCadeiraAtraso);
  app.use("/api/v1", routerRecurso);
  app.use("/api/v1", routerExameEspecial);
  app.use("/api/v1", routerListaRecurso);
  app.use("/api/v1", routerFolha);
  app.use("/api/v1", routerMatricula);
  app.use("/api/v1", routerInscrincaoMatricula);
  app.use("/api/v1", routerListaCadeira);
  app.use("/api/v1", routerListaExame);

  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando no processo ${process.pid}`)
  );
}

module.exports = app;
