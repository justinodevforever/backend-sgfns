let publi = [];

const removeuser = (socketId) => {
  return publi.filter((user) => user?.socket_id !== socketId);
};
const getUser = (socketId) => {
  return publi.find((user) => user.socket_id === socketId);
};
const SocketComentPublicacao = (socket, io) => {
  //Enviar notificacao quando houver um comentaririo
  socket.on("connectedPublication", (publiId) => {
    publi.push({
      adId: publiId,
      socket_id: socket?.id,
    });
    const users = getUser(socket.id);
    socket.join(publiId);
  });

  socket.on("comentpublication", async ({ data, idPublicacao }) => {
    // console.log(data);

    io.to(idPublicacao).emit("receiveComentPublication", data, idPublicacao);
  });

  socket.on("disconnect", () => {
    console.log("disconectado");

    removeuser(socket?.id);
  });
};

let publicacao = [];

const removeuserPublicacao = (socketId) => {
  return publicacao.filter((user) => user?.socket_id !== socketId);
};
const getUserPublicacao = (socketId) => {
  return publicacao.find((user) => user.socket_id === socketId);
};
const SocketPublicar = (socket, io) => {
  //Enviar notificacao quando houver um comentaririo
  socket.on("connectedPublication", (idPublicacao) => {
    publicacao.push({
      idPublicacao: idPublicacao,
      socket_id: socket?.id,
    });
    const users = getUserPublicacao(socket.id);
    socket.join(idPublicacao);
  });

  socket.on("publication", async (data) => {
    // console.log(data);

    io.emit("receivePublication", data);
  });

  socket.on("disconnect", () => {
    console.log("disconectado");

    removeuserPublicacao(socket?.id);
  });
};

module.exports = { SocketComentPublicacao, SocketPublicar };
