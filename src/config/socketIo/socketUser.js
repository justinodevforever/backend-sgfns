const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

let online = [];

const addUser = (userId, socketId) => {
  !online.some((user) => user?.userId === userId) &&
    online.push({ userId, socketId });
};

const removeuser = (socketId) => {
  online = online.filter((user) => user?.socketId !== socketId);
};

const getUser = (userId) => {
  return online.find((user) => user?.userId === userId);
};

let users = [];
const connectedUser1 = (socket) => {
  socket.on("connected", (userId) => {
    users[userId] = socket.id;
  });
};
const SocketUser = (socket, io) => {
  socket.on("addUser", (userId) => {
    addUser(userId, socket?.id);
    io.emit("getUsers", online);
  });

  // enviando mensagem no usuario especifico
  socket.on("sendMessege", async (data) => {
    const response = await prisma.usuario.findFirst({
      where: { id: data.receiveId },
    });
    console.log(response);
    const messagem = {
      sendId: data?.sendId,
      receiveId: data?.receiveId,
      sms: data.sms,
      createdAt: data?.createdAt,
    };
    if (response != null || response !== undefined) {
      const user = await prisma.usuario.findFirst({
        where: {
          id: data.sendId,
        },
      });
      if (user != null || user !== undefined) {
        socket.to(users[response.id]).emit("messageReceived", messagem);
      }
    }
  });

  socket.on("sendMe", ({ sendId, receiveId, sms }) => {
    const user = getUser(receiveId);
    socket.to(user.socketId).emit("getMe", {
      sendId,
      sms,
    });
  });
  socket.on("disconnect", () => {
    removeuser(socket.id);
    socket.emit("getUsers", online);
  });
};
module.exports = { SocketUser, connectedUser1 };
