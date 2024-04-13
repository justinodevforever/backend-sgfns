const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createLikeComentarioPublicacao = async (req, res) => {
  const { like, fk_comentario, fk_user } = req.body;

  try {
    await prisma.linkComentarioPublicacao.create({
      data: {
        like,
        fk_comentario,
        fk_user,
      },
    });
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getLikeComentarioPublicacoes = async (req, res) => {
  try {
    const response = await prisma.linkComentarioPublicacao.findMany();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const getLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await prisma.linkComentarioPublicacao.findFirst({
      include: {
        usuario: {},
        comentario: {},
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

const getLikeComentarioPublicacaoEspecific = async (req, res) => {
  const { fk_user, fk_comentario } = req.body;

  try {
    const response = await prisma.linkComentarioPublicacao.findMany({
      include: {
        usuario: {},
        comentario: {},
      },
      where: {
        fk_comentario,
        fk_user,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikeComentarioPublicacaoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
    const response = await prisma.linkComentarioPublicacao.findFirst({
      where: {
        like: cliclike,
        fk_user,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDateLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const response = await prisma.linkComentarioPublicacao.update({
      data: {
        like,
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

const deleteLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.linkComentarioPublicacao.delete(id);
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikeComentarioPublicacao = async (req, res) => {
  const { fk_comentario, like } = req.body;

  try {
    const response = await prisma.linkComentarioPublicacao.count({
      where: {
        fk_comentario,
        like: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createLikeComentarioPublicacao,
  getLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecific,
  getLikeComentarioPublicacoes,
  upDateLikeComentarioPublicacao,
  deleteLikeComentarioPublicacao,
  CountLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecificUser,
};
