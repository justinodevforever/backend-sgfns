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
const connectedNotify = (socket) => {
  socket.on("connectedUserNotify", (fk_user) => {
    users[fk_user] = socket.id;
  });
};
const SocketNotify = (socket, io) => {
  socket.on("addUser", (userId) => {
    addUser(userId, socket?.id);
    io.emit("getUsers", online);
  });

  // enviando mensagem no usuario especifico
  socket.on("sendNotify", async (fk_estudante) => {
    try {
      const meses = [
        "Outubro",
        "Novembro",
        "Dezembro",
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
      ];
      const agora = Date.now();
      const date = new Date(agora);

      let [mesHoje, c] = date
        .toLocaleTimeString("pt-BR", { month: "long" })
        .split(" ");

      const [ano, dia] = date
        .toLocaleTimeString("pt-BR", { year: "numeric" })
        .split(",");

      const response = await prisma.propina.findMany({
        where: {
          fk_estudante,
          anoLectivo: {
            ano: `${Number(ano) - Number(1)}/${ano}`,
          },
        },

        include: {
          usuario: true,
          mes: true,
          estudante: true,
          anoLectivo: true,
        },
      });

      let mesesAll = [];
      let mesesAll1 = [];
      response.map((prop) => {
        mesesAll.push(prop.mes.mes);
      });

      for (let mes = 0; mes < meses.length; mes++) {
        if (meses[mes].toLowerCase() === mesHoje.toLowerCase()) break;

        if (!mesesAll.some((me) => me.includes(meses[mes]))) {
          mesesAll1.push(meses[mes]);
        }
      }

      socket.emit("receivedNotify", mesesAll1);
    } catch (error) {
      console.log({ mensage: error });
    }
  });

  socket.on("disconnect", () => {
    console.log("disconectado");

    removeuser(socket.id);
    socket.emit("getUsers", online);
  });
};
module.exports = { SocketNotify, connectedNotify };
