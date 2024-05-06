const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCurso = async (req, res) => {
  try {
    const { curso } = req.body;
    if (!curso) return res.json({ message: "error" });
    await prisma.curso.create({
      data: {
        curso,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getCursos = async (req, res) => {
  try {
    const response = await prisma.curso.findMany({
      orderBy: [{ curso: "asc" }],
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
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
    res.json({ message: "error" });
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
    res.json({ message: "error" });
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
    res.json({ message: "error" });
  }
};
const upDateCurso = async (req, res) => {
  const { curso } = req.body;
  const { id } = req.params;
  if (!curso || !id) return res.json({ message: "error" });
  try {
    await prisma.curso.update({
      data: {
        curso,
      },
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
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
