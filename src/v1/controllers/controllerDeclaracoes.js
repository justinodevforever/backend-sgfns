const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createDeclaracoes = async (req, res) => {
  const { fk_curso, fk_ano } = req.body;
  try {
    await prisma.declaracao.create({
      data: {},
    });
  } catch (error) {
    res.json(error);
  }
};

const getDeclaracoes = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};

const deleteDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createDeclaracoes,
  getDeclaracoes,
  deleteDeclaracoes,
  upDateDeclaracoes,
};
