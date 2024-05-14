require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");

const roueterUser = require("./src/v1/routers/routerUser");
const routerPublicacao = require("./src/v1/routers/routerPublicacao");
const routerEstudante = require("./src/v1/routers/routerEstudante");
const routerComentarioPublicacao = require("./src/v1/routers/routerComentarioPublicacao");
const routerImagePublicacao = require("./src/v1/routers/routerImagePublicacao");
const routerMensagem = require("./src/v1/routers/routerMensagem");
const routerContactUser = require("./src/v1/routers/routerContactUser");
const routerImageUSer = require("./src/v1/routers/routerImageUser");
const routerDeclaracoes = require("./src/v1/routers/routerDeclaracoes");
const routerLikePublicacao = require("./src/v1/routers/routerLikePublicacao");
const routerLikeComunicado = require("./src/v1/routers/routerLikeComunicado");
const routerLikeComentarioPublicacao = require("./src/v1/routers/routerLikeComentarioPublicacao");
const routerLikeComentarioPagina = require("./src/v1/routers/routerLikeComentarioPagina");
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
const routerSolicitacao = require("./src/v1/routers/routerSolicitacao");

const {
  SocketUser,
  connectedUser1,
} = require("./src/config/socketIo/socketUser");
const {
  SocketStatus,
  connectedUser,
  SocketMensage,
  connectedUserSms,
} = require("./src/config/socketIo/socketStatus");
const {
  SocketComentEvangelho,
} = require("./src/config/socketIo/socketEvangelho");
const {
  SocketPublicar,
  SocketComentPublicacao,
} = require("./src/config/socketIo/socketPublicacao");
const { SocketComentPage } = require("./src/config/socketIo/socketPage");
const {
  socketLikePagina,
  socketLikePublicacao,
  socketLikeComunicado,
  socketLikeComentarioPagina,
  socketLikeComentarioPublicacao,
} = require("./src/config/socketIo/socketLike");
const {
  SocketNotify,
  connectedNotify,
} = require("./src/config/socketIo/notify");

require("./src/v1/database/db");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.URL_FRONT,
  },
});

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "src", "public", "upload"))
);

app.use("/api/v1", roueterUser);
app.use("/api/v1", routerComentarioPublicacao);
app.use("/api/v1", routerPublicacao);
app.use("/api/v1", routerMensagem);
app.use("/api/v1", routerEstudante);
app.use("/api/v1", routerPublicacao);
app.use("/api/v1", routerComentarioPublicacao);
app.use("/api/v1", routerImageUSer);
app.use("/api/v1", routerContactUser);
app.use("/api/v1", routerImagePublicacao);
app.use("/api/v1", routerImagePublicacao);
app.use("/api/v1", routerPropina);
app.use("/api/v1", routerDeclaracoes);
app.use("/api/v1", routerLikePublicacao);
app.use("/api/v1", routerLikeComunicado);
app.use("/api/v1", routerLikeComentarioPublicacao);
app.use("/api/v1", routerLikeComentarioPagina);
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
app.use("/api/v1", routerSolicitacao);

io.on("connection", (socket) => {
  //usuario especifico conectado na rede

  connectedUser(socket);
  SocketPublicar(socket, io);
  SocketUser(socket, io);
  SocketStatus(socket, io);
  SocketComentEvangelho(socket, io);
  SocketComentPublicacao(socket, io);
  SocketComentPage(socket, io);
  connectedUser1(socket);
  socketLikePagina(socket, io);
  socketLikePublicacao(socket, io);
  socketLikeComunicado(socket, io);
  socketLikeComentarioPagina(socket, io);
  socketLikeComentarioPublicacao(socket, io);
  SocketMensage(socket, io);
  SocketNotify(socket, io);
  connectedNotify(socket);
  connectedUserSms(socket);

  socket.on("conectar", (user) => {
    socket.broadcast.emit("conectar", user);
  });

  socket.on("notify", (data) => {
    socket.broadcast.emit("notify", data);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Servidor Rodando na porta ${process.env.PORT}`);
});

module.exports = app;
