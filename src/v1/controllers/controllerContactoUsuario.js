const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createContactUsuario = async (req, res) => {
  const { sendId, receiveId, seguir } = req.body;
  try {
    if (!sendId || !receiveId) {
      res.json({ message: "error" });
      return;
    }
    const response = await prisma.contactUser.create({
      data: {
        sendId,
        receiveId,
        seguir: true,
      },
    });
    res.json({ messae: "sucess", response: response });
  } catch (error) {
    res.json({ mensage: "error" });
  }
};
const getContactsusuario = async (req, res) => {
  const { receiveId, sendId } = req.body;

  try {
    const response = await prisma.contactUser.findMany({
      include: {
        sender: true,
        receiver: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};

const getContactUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.contactUser.findFirst({
      include: {
        sender: {
          select: {
            permissions: true,
          },
        },
        receiver: {
          include: {
            permissions: true,
          },
        },
      },

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
  const { userId } = req.params;

  try {
    const response = await prisma.contactUser.findMany({
      include: {
        sender: {
          include: {
            permissions: {
              include: {
                permission: true,
              },
            },
          },
        },
        receiver: {
          include: {
            permissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
      where: {
        OR: [
          {
            sendId: userId,
          },
          {
            receiveId: userId,
          },
        ],
      },
    });

    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};
const ContactusuarioSec = async (req, res) => {
  const { secId, userId } = req.body;

  try {
    const response = await prisma.contactUser.findFirst({
      include: {
        sender: true,
        receiver: true,
      },
      where: {
        OR: [{ receiveId: secId }, { sendId: secId }],

        OR: [{ receiveId: userId }, { sendId: userId }],
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};
const ContactusuarioAdmin = async (req, res) => {
  const { adminId, userId } = req.body;

  try {
    const response = await prisma.contactUser.findFirst({
      include: {
        sender: true,
        receiver: true,
      },
      where: {
        OR: [{ receiveId: adminId }, { sendId: adminId }],

        OR: [{ receiveId: userId }, { sendId: userId }],
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};
const Contactusuariopecific = async (req, res) => {
  const { contactId, userId } = req.body;
  try {
    const response = await prisma.contactUser.findMany({
      include: {
        sender: true,
        receiver: true,
        contact: true,
      },
      where: {
        contactId,
        userId,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const findContact = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.contactUser.findMany({
      include: {
        sender: true,

        receiver: true,
        contact: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteContactUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.messagem.deleteMany({
      where: {
        contactId: id,
      },
    });
    await prisma.contactUser.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: error });
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
  findContact,
  ContactusuarioAdmin,
  ContactusuarioSec,
};
