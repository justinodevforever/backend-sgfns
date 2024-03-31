const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.comentario.create({
      data: {
        comentario: {},
        publicacao: {},
      },
    });
  } catch (error) {}
};
const createComentarioPublicacao = async (req, res) => {
  const { comentario, fk_user, fk_publicacao } = req.body;
  try {
    if (!comentario) {
      res.json("Campo Vazio");
      return;
    }
    await prisma.comentario.create({
      data: {
        comentario,
        fk_user,
        fk_publicacao,
      },
    });
  } catch (error) {}
};

const getComentariosPublicacoes = async (req, res) => {
  const { skip, teke } = req.query;

  try {
    const response = await prisma.comentario.findMany({
      include: {
        publicacao: {},
        usuario: {},
      },
      skip: skip,
      teke: teke,
    });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const deleteComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.comentario.delete({
      where: { id },
    });
    res.status(200).json({ message: "sucess" });
  } catch (error) {}
};

const upDatecomentarioPublicacao = async (req, res) => {
  const { id } = req.params;

  const { comentario } = req.body;

  try {
    if (!comentario) return;
    await prisma.comentario.update({
      data: {
        comentario,
      },
    });
    res.status(200).json({ mensage: "sucess" });
  } catch (error) {
    res.json({ mensage: "error" });
  }
};
const getComentSpecific = async (req, res) => {
  const { fk_publicacao } = req.body;
  const { skip, teke } = req.query;
  try {
    const response = await prisma.comentario.findMany({
      where: {
        fk_publicacao,
      },
      skip: skip,
      take: teke,
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const count = async (req, res) => {
  const { fk_publicacao } = req.body;

  try {
    const response = await prisma.comentario.count({
      where: { fk_publicacao },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createComentarioPublicacao,
  getComentariosPublicacoes,
  getComentarioPublicacao,
  deleteComentarioPublicacao,
  upDatecomentarioPublicacao,
  getComentSpecific,
  count,
};
