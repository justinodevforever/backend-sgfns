const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.comentario.findFirst({
      include: {
        usuario: {},
        publicacao: {},
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const createComentarioPublicacao = async (req, res) => {
  const { comentario, fk_user, fk_publicacao } = req.body;
  try {
    if (!comentario || !fk_publicacao || !fk_user) {
      res.json("Campo Vazio");
      return;
    }
    const resp = await prisma.comentario.create({
      data: {
        comentario,
        fk_user,
        fk_publicacao,
      },
    });
    const response = await prisma.comentario.findFirst({
      include: {
        usuario: {},
        publicacao: {},
      },
      where: {
        id: resp.id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
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
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const deleteComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    await prisma.linkComentarioPublicacao.deleteMany({
      where: {
        fk_comentario: id,
      },
    });
    await prisma.comentario.delete({
      where: { id },
    });
    res.status(200).json({ message: "sucess" });
  } catch (error) {
    console.log({ message: error });
  }
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
      where: { id },
    });
    res.status(200).json({ mensage: "sucess" });
  } catch (error) {
    res.json({ mensage: "error" });
  }
};
const getComentSpecific = async (req, res) => {
  const { fk_publicacao } = req.body;
  const { page, teke } = req.query;
  try {
    const count = await prisma.comentario.count({
      where: {
        fk_publicacao,
      },
    });
    const limit = 5;
    const totalPage = Math.ceil(count / limit);
    const response = await prisma.comentario.findMany({
      include: {
        usuario: {},
        publicacao: {},
      },
      where: {
        fk_publicacao,
      },
      skip: Number(page),
      take: limit,
    });
    const pagination = {
      prev_page: Number(page) - 1 >= 1 ? Number(page) - 1 : false,
      next_page:
        Number(page) + Number(1) > totalPage ? false : Number(page) + Number(1),
    };
    res.json({ response: response, pagination: pagination });
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
