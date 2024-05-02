const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEstudante = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.estudante.findFirst({
      include: {
        curso: {},
        user: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(401).json({ message: "error" });
  }
};
const buscaEstudantePorBi = async (req, res) => {
  const { bi } = req.body;
  console.log(bi);
  try {
    const response = await prisma.estudante.findFirst({
      include: {
        curso: true,
        user: true,
      },
      where: {
        bi,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const createEstudante = async (req, res) => {
  const { nome, bi, contato, fk_user, fk_curso, periodo } = req.body;

  try {
    if (!nome || !bi || !contato || !fk_curso || !fk_user || !periodo) {
      res.json({ message: "error" });
      return;
    }
    const resp = await prisma.estudante.findFirst({
      where: {
        bi,
      },
    });
    if (resp) {
      res.json({ message: "exist" });
      return;
    }
    const response = await prisma.estudante.create({
      data: {
        nome,
        bi,
        contacto: contato,
        fk_curso,
        fk_user,
        periodo,
      },
    });
    res.json(response);
    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: error });
  }
};

const getEstudantes = async (req, res) => {
  try {
    const response = await prisma.estudante.findMany({
      include: {
        curso: {},
        user: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getEstudanteBi = async (req, res) => {
  try {
    const { bi } = req.body;
    const response = await prisma.estudante.findFirst({
      include: {
        curso: {},
        user: true,
      },
      where: {
        bi,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getEstudanteEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.estudante.findFirst({
      include: {
        curso: {},
        user: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {}
};
const getAllEstudante = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.estudante.findMany({
      include: {
        curso: {},
        user: true,
      },
      where: {
        fk_user,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getEstudantePorUsuario = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.estudante.findFirst({
      include: {
        curso: {},
        user: true,
      },
      where: {
        fk_user,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteEstudante = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.estudante.delete({
      where: {
        id,
      },
    });
    res.json(response);
    res.status(200).json({ user: "Removido Com sucesso" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateEstudante = async (req, res) => {
  const { id } = req.params;

  const { nome, contato, fk_curso, periodo } = req.body;

  if (!nome || !contato || !fk_curso || !periodo) {
    res.json({ message: "error" });
    return;
  }

  try {
    const response = await prisma.estudante.update({
      data: {
        nome,
        contacto: contato,
        fk_curso,
        periodo,
      },
      where: {
        id,
      },
    });
    res.json(response);
    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchEstudante = async (req, res) => {
  const { nome } = req.body;
  try {
    if (nome !== "") {
      const response = await prisma.estudante.findFirst({
        include: {
          curso: {},
          user: true,
        },
        where: {
          nome,
        },
      });
      res.json(response);
    }
  } catch (error) {
    res.json({ mensage: "error" });
  }
};

module.exports = {
  createEstudante,
  getEstudante,
  getEstudantes,
  deleteEstudante,
  upDateEstudante,
  getEstudanteEspecifico,
  getAllEstudante,
  searchEstudante,
  buscaEstudantePorBi,
  getEstudantePorUsuario,
  getEstudanteBi,
};
