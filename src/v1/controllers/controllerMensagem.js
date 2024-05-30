const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.messagem.findMany({
      include: {
        conactUSaer: true,
      },
      where: {
        conactUSaer: {
          OR: [
            {
              sendId: id,
            },
            { receiveId: id },
          ],
        },
        AND: [
          {
            lida: false,
            NOT: [
              {
                sendId: id,
              },
            ],
          },
        ],
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const createMensagem = async (req, res) => {
  const { sms, contactId, sendId } = req.body;
  console.log("response", contactId);

  try {
    const response = await prisma.messagem.create({
      data: {
        sms,
        sendId,
        lida: false,
        contactId,
      },
    });

    res.json({ response: response, message: "sucess" });
  } catch (error) {
    console.log(error.message);
  }
};

const getMensagens = async (req, res) => {
  try {
    const response = await prisma.messagem.findMany({
      include: {
        user: true,
        conactUSaer: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getMensagemporNome = async (req, res) => {
  const { contactId } = req.params;
  try {
    const response = await prisma.messagem.findMany({
      where: {
        contactId,
      },
      include: {
        user: true,
        conactUSaer: true,
      },
      orderBy: [{ createdAt: "asc" }],
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getMensagemNaoLida = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await prisma.messagem.findMany({
      where: {
        lida: false,
        id,
      },
      include: {
        conactUSaer: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getMensagemporNomeOrder = async (req, res) => {
  const { contactId } = req.params;
  try {
    const response = await prisma.messagem.findMany({
      where: {
        contactId,
      },
      include: {
        user: true,
        conactUSaer: {
          include: {
            receiver: true,
            sender: true,
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
    });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

const deleteMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.messagem.delete(id);
    res.status(200).json({ user: "Removido Com sucesso" });
  } catch (error) {
    res.json(error);
  }
};

const upDateMensagem = async (req, res) => {
  const { id } = req.params;
  const { lida } = req.body;

  try {
    await prisma.messagem.update({
      data: {
        lida,
      },
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: "error" });
  }
};

module.exports = {
  createMensagem,
  getMensagens,
  getMensagem,
  deleteMensagem,
  upDateMensagem,
  getMensagemporNome,
  getMensagemporNomeOrder,
  getMensagemNaoLida,
};
