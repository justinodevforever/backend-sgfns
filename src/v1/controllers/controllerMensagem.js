const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.findFirst({
      where: {
        id,
      },
      include: {
        user: true,
        conactUSaer,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const createMensagem = async (req, res) => {
  const { sms, contactId, sendId } = req.body;

  try {
    await prisma.messagem.create({
      data: {
        sms,
        contactId,
        sendId,
        createdAt: Date.now(),
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: "error" });
  }
};

const getMensagens = async (req, res) => {
  try {
    const response = await prisma.messagem.findMany({
      include: {
        user: true,
        conactUSaer,
      },
    });
    res.json("response");
  } catch (error) {
    res.json(error);
  }
};
const getMensagemporNome = async (req, res) => {
  const { contactId } = req.params;
  try {
    const response = await prisma.messagem.findFirst({
      where: {
        contactId,
      },
      include: {
        user: true,
        conactUSaer,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getMensagemNaoLida = async (req, res) => {
  const { contactId } = req.params;
  try {
    const response = await prisma.messagem.findFirst({
      where: {
        contactId,
      },
      include: {
        user: true,
        conactUSaer,
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
    const response = await prisma.messagem.findFirst({
      where: {
        contactId,
      },
      include: {
        user: true,
        conactUSaer,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
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

  try {
    await prisma.messagem.update({
      data: {
        sms,
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
