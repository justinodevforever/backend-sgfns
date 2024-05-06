const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSemestre = async (req, res) => {
  const { nome, numero } = req.body;
  try {
    if ((!nome && !numero) || numero === 0)
      return res.json({ message: "Campo vazios" });
    console.log(nome, numero);
    await prisma.semestre.create({
      data: {
        nome,
        numero,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getSemestres = async (req, res) => {
  try {
    const response = await prisma.semestre.findMany();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const SemestresEspecifico = async (req, res) => {
  const { fk_curso, fk_ano } = req.body;
  try {
  } catch (error) {
    res.json(error);
  }
};
const getSemestre = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.semestre.findFirst({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const buscaSemestre = async (req, res) => {
  try {
    const { nome } = req.body;
    const response = await prisma.semestre.findFirst({
      where: {
        nome,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteSemestre = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.semestre.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json(error);
  }
};
const upDateSemestre = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, numero } = req.body;
    if (!id && !nome && numero) return res.json({ message: "error" });
    const response = await prisma.semestre.update({
      data: {
        nome,
        numero,
      },
      where: {
        id,
      },
    });
    res.json({ semestre: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

module.exports = {
  createSemestre,
  getSemestre,
  getSemestres,
  deleteSemestre,
  upDateSemestre,
  buscaSemestre,
};
