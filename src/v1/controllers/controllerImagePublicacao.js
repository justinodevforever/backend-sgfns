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
          legenda: "",
          nome: filename,
        },
      });
      res.status(200).json(response);
    } else {
      res.status(200).json("response");
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
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
  } catch (error) {}
};

const updateImagePublicacao = async (req, res) => {
  const { fk_publicacao } = req.body;
  const { id } = req.params;
  try {
    const { filename } = req.file;
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deleteImagePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

module.exports = {
  createImagePublicacao,
  getImagePublicacao,
  updateImagePublicacao,
  deleteImagePublicacao,
  getImagePublication,
};
