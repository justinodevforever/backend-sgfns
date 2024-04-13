const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createContactUsuario = async (req, res) => {
  const { sendId, receiveId, seguir } = req.body;
  try {
    if (!sendId || !receiveId || !seguir) {
      res.json({ message: "error" });
      return;
    }
    await prisma.contactUser.create({
      data: {
        sendId,
        receiveId,
        seguir,
      },
    });
    res.json({ messae: "sucess" });
  } catch (error) {
    res.json({ mensage: "error" });
  }
};
const getContactsusuario = async (req, res) => {
  const { receiveId, sendId } = req.body;

  try {
    const response = await prisma.contactUser.findMany({
      where: {
        receiveId,
        sendId,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const getContactUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.contactUser.findFirst({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const ContactUsuario = async (req, res) => {
  try {
    const response = await prisma.contactUser.findMany();
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const Contactusuariopecific = async (req, res) => {
  const { contactId, userId } = req.body;
  try {
    const response = await prisma.contactUser.findMany();
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteContactUsuario = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateContactUsuario = async (req, res) => {
  const { id } = req.params;
  const { receiveId, sendId } = req.body;
  try {
    if (
      receiveId != undefined &&
      receiveId != null &&
      sendId != undefined &&
      sendId != null &&
      id != undefined &&
      id != null
    ) {
    }
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

module.exports = {
  createContactUsuario,
  getContactUsuario,
  getContactsusuario,
  deleteContactUsuario,
  upDateContactUsuario,
  ContactUsuario,
  Contactusuariopecific,
};
