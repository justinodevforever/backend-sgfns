const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPublicacao = async (req, res) => {
  try {
    const { publicacao, fk_user } = req.body;
    if (publicacao != undefined || publicacao != "") {
      const response = await prisma.publicacao.create({
        data: {
          publicacao,
          fk_user,
        },
      });
      res.status(201).json(response);
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getPublicacoes = async (req, res) => {
  const { skip, teke } = req.query;

  try {
    const response = await prisma.publicacao.findMany({
      include: {
        usuario: {},
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const getPublicacaoPerfil = async (req, res) => {
  const { fk_user } = req.body;
  const { page = 1 } = req.query;

  const limit = 10;
  let lastPage = 1;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDatePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    const { publicacao, fk_user } = req.body;

    await prisma.publicacao.update({
      data: {
        publicacao,
      },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

const getPublicacao = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await prisma.publicacao.findFirst({
      include: {
        usuario: {},
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const deletePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.publicacao.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createPublicacao,
  getPublicacao,
  getPublicacoes,
  upDatePublicacao,
  deletePublicacao,
  getPublicacaoPerfil,
};
