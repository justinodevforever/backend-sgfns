let publi = [];

const removeuser = (socketId) => {
  return publi.filter((user) => user?.socket_id !== socketId);
};
const getUser = (socketId) => {
  return publi.find((user) => user.socket_id === socketId);
};
const SocketComentEvangelho = (socket, io) => {
  //Enviar notificacao quando houver um comentaririo
  socket.on("connectedPablicacaao", (publiId) => {
    publi.push({
      puId: publiId,
      socket_id: socket?.id,
    });
    const users = getUser(socket.id);
    socket.join(publiId);
  });

  socket.on("comentEvangelho", async ({ data, puId }) => {
    // console.log(data);

    io.to(puId).emit("receiveComentEvangelho", data, puId);
  });

  socket.on("disconnect", () => {
    console.log("disconectado");

    removeuser(socket?.id);
  });
};

module.exports = { SocketComentEvangelho };
