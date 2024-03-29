let publi = [];

const removeuser = (socketId) => {
  return publi.filter((user) => user?.socket_id !== socketId);
};
const getUser = (socketId) => {
  return publi.find((user) => user.socket_id === socketId);
};
const SocketComentPage = (socket, io) => {
  //Enviar notificacao quando houver um comentaririo
  socket.on("connectedPage", (publiId) => {
    publi.push({
      puId: publiId,
      socket_id: socket?.id,
    });
    const users = getUser(socket.id);
    socket.join(publiId);
  });

  socket.on("comentPage", async ({ data, puId }) => {
    // console.log(data);

    io.to(puId).emit("receiveComentPage", data, puId);
  });

  socket.on("disconnect", () => {
    console.log("disconectado");

    removeuser(socket?.id);
  });
};

module.exports = { SocketComentPage };
