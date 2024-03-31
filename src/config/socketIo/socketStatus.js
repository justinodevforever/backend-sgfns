const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

let users = [];

const connectedUser = (socket) => {
  socket.on("connected", (userId) => {
    users[userId] = socket.id;
  });
};
let usersSms = [];

const connectedUserSms = (socket) => {
  socket.on("connectedNotify", (userId) => {
    usersSms[userId] = socket.id;
    console.log(socket.id);
  });
};

const SocketStatus = (socket, io) => {
  //Enviando quando o usuario estiver a digitar
  socket.on("status", async (data) => {
    // const response = await usuario.findOne({
    //   where: { id: data.receiveId },
    // });
    // if (response != null || response !== undefined) {
    //   const { dataValues } = await usuario.findOne({
    //     where: {
    //       id: data.sendId,
    //     },
    //   });
    //   if (dataValues != null || dataValues !== undefined) {
    //     io.to(users[response.dataValues.id]).emit("digitando", data);
    //   }
    // }
  });
};

const SocketMensage = (socket, io) => {
  socket.on("notifyMessage", async (data) => {
    const response = await prisma.usuario.findFirst({
      where: { id: data.receiveId },
    });
    if (response != null || response !== undefined) {
      const res = await prisma.usuario.findFirst({
        where: {
          id: data.sendId,
        },
      });
      if (res != null || res !== undefined) {
        io.to(usersSms[response.id]).emit("receiverNotify", data);
      }
    }
  });
};

module.exports = {
  SocketStatus,
  connectedUser,
  SocketMensage,
  connectedUserSms,
};
