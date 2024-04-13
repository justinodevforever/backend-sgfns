const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createLikePublicacao = async (req, res) => {
  const { like, fk_publicacao, fk_user } = req.body;

  try {
    await prisma.linkPublicacao.create({
      data: {
        like,
        fk_publicacao,
        fk_user,
      },
    });
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacoes = async (req, res) => {
  try {
    const response = await prisma.linkPublicacao.findMany({
      include: {
        publicacao: {},
        usuario: {},
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacao = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await prisma.linkPublicacao.findFirst({
      include: {
        publicacao: {},
        usuario: {},
      },
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacaoEspecific = async (req, res) => {
  const { fk_user, fk_publicacao } = req.body;

  try {
    const response = await prisma.linkPublicacao.findMany({
      include: {
        publicacao: {},
        usuario: {},
      },
      where: {
        fk_publicacao,
        fk_user,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikePublicacaoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
    const response = await prisma.linkPublicacao.findFirst({
      include: {
        publicacao: {},
        usuario: {},
      },
      where: {
        like: cliclike,
        fk_user,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDateLikePublicacao = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    await prisma.linkPublicacao.update({
      data: {
        like,
      },
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.linkPublicacao.delete(id);
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikePublicacao = async (req, res) => {
  const { fk_publicacao, like } = req.body;

  try {
    const response = await prisma.linkPublicacao.count({
      where: {
        fk_publicacao,
        like: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createLikePublicacao,
  getLikePublicacao,
  getLikePublicacaoEspecific,
  getLikePublicacoes,
  upDateLikePublicacao,
  deleteLikePublicacao,
  CountLikePublicacao,
  getLikePublicacaoEspecificUser,
};
