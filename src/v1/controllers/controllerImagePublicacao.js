const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createImagePublicacao = async (req, res) => {
  const { fk_publicacao } = req.body;

  try {
    const filename = req.file;

    if (filename !== undefined) {
      const response = await prisma.profilePublicacao.create({
        data: {
          fk_publicacao,
          legenda: "hghg",
          nome: filename.filename,
        },
      });
      res.status(200).json(response);
    } else {
      res.status(200).json("response");
    }
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const getImagePublicacao = async (req, res) => {
  try {
    const response = await prisma.profilePublicacao.findMany({
      include: {
        publicacao: {},
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};

const getImagePublication = async (req, res) => {
  const { fk_publicacao } = req.body;
  try {
    const response = await prisma.profilePublicacao.findFirst({
      where: {
        fk_publicacao,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error });
  }
};

const updateImagePublicacao = async (req, res) => {
  const { fk_publicacao } = req.body;
  const { id } = req.params;
  try {
    const { filename } = req.file;
    await prisma.profilePublicacao.update({
      data: {
        fk_publicacao,
        nome: filename,
      },
      where: {
        id,
      },
    });
    res.json();
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteImagePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.profilePublicacao.delete({ where: { id } });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

module.exports = {
  createImagePublicacao,
  getImagePublicacao,
  updateImagePublicacao,
  deleteImagePublicacao,
  getImagePublication,
};
