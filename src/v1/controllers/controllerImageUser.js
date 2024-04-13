const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createImageUser = async (req, res) => {
  const { fk_user, legenda } = req.body;
  try {
    const filename = req.file;
    if (!filename || filename === undefined || filename === " ") {
      res.json({ message: "error" });
      return;
    }
    const response = await prisma.profileUser.create({
      data: {
        nome: filename,
        legenda,
        fk_user,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: error });
  }
};

const getImagesUser = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.profileUser.findFirst({
      where: {
        fk_user,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};
const imagesUser = async (req, res) => {
  try {
    const response = await prisma.profileUser.findMany();
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};

const removeImageUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.profileUser.delete(id);
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};
const upDateImageUSer = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.profileUser.update({
      data: {
        nome,
        legenda,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};

module.exports = {
  createImageUser,
  getImagesUser,
  removeImageUser,
  imagesUser,
  upDateImageUSer,
};
