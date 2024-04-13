const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.messagem.findFirst({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(400).json({ mensage: error.mensage });
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
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.status(400).json({ mensage: "error" });
  }
};

const getMensagens = async (req, res) => {
  try {
    const response = await prisma.messagem.findMany();
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemporNome = async (req, res) => {
  const { contactId } = req.params;
  try {
    const response = await prisma.messagem.findFirst({
      where: {
        contactId,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemNaoLida = async (req, res) => {
  const { contactId } = req.params;
  try {
    const response = await prisma.messagem.findFirst({
      where: {
        contactId,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemporNomeOrder = async (req, res) => {
  const { contactId } = req.params;
  try {
    const response = await prisma.messagem.findFirst({
      where: {
        contactId,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.messagem.delete(id);
    res.status(200).json({ user: "Removido Com sucesso" });
  } catch (error) {
    res.json({ mensage: error.mensage });
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
