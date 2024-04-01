const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCurso = async (req, res) => {
  try {
    const { curso } = req.body;

    const response = await prisma.curso.create({
      data: {
        curso,
      },
    });
    res.json("sucesso");
  } catch (error) {
    res.json(error);
  }
};

const getCursos = async (req, res) => {
  try {
    const response = await prisma.curso.findMany();
    res.json(response);
  } catch (error) {
    res.json("error");
  }
};
const getCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.curso.findFirst({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getCursoEspecifico = async (req, res) => {
  try {
    const { curso } = req.body;
    const response = await prisma.curso.findFirst({
      where: {
        curso,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteCurso = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.curso.delete({
      where: {
        id,
      },
    });
    res.json({ message: "Sucess" });
  } catch (error) {
    res.json(error);
  }
};
const upDateCurso = async (req, res) => {
  const { curso } = req.body;
  const { id } = req.params;
  try {
    const response = await prisma.curso.update({
      data: {
        curso,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCurso,
  getCursos,
  getCurso,
  deleteCurso,
  upDateCurso,
  getCursoEspecifico,
};
