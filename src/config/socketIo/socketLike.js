const socketLikePagina = (socket, io) => {
  socket.on("clicLikePage", (data) => {
    io.emit("receiveClickPage", data);
    console.log("dsdsdsdsd", data);
  });
};
const socketLikePublicacao = (socket, io) => {
  socket.on("clicLikePublicacao", (data) => {
    io.emit("receiveClickPublicacao", data);
    console.log("dsdsdsdsd", data);
  });
};
const socketLikeComunicado = (socket, io) => {
  socket.on("clicLikeComunicado", (data) => {
    io.emit("receiveClickComunicado", data);
    console.log("dsdsdsdsd", data);
  });
};
const socketLikeComentarioPagina = (socket, io) => {
  socket.on("clicLikecomentarioPagina", (data) => {
    io.emit("receiveClickComentarioPagina", data);
    console.log("dsdsdsdsd", data);
  });
};
const socketLikeComentarioPublicacao = (socket, io) => {
  socket.on("clicLikeComentarioPublicacao", (data) => {
    io.emit("receiveClickComentarioPublicacao", data);
    console.log("dsdsdsdsd", data);
  });
};

module.exports = {
  socketLikePagina,
  socketLikePublicacao,
  socketLikeComentarioPagina,
  socketLikeComentarioPublicacao,
  socketLikeComunicado,
};
