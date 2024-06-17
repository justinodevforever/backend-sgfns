const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createDeclaracoes = async (req, res) => {
  const { fk_estudante, fk_user, desc, dataSolicitacao, frequencia } = req.body;
  try {
    const response = await prisma.declaracao.create({
      data: {
        desc,
        fk_estudante,
        fk_user,
        dataSolicitacao,
        frequencia,
      },
    });
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getDeclaracoes = async (req, res) => {
  try {
    const response = await prisma.declaracao.findMany({
      include: {
        usuario: true,
        estudante: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getDeclaracao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.declaracao.findFirst({
      include: {
        usuario: true,
        estudante: true,
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

const deleteDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.declaracao.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
    const { frequencia, dataSolicitacao } = req.body;
    await prisma.declaracao.update({
      data: {
        frequencia,
        dataSolicitacao,
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
  createDeclaracoes,
  getDeclaracoes,
  deleteDeclaracoes,
  upDateDeclaracoes,
  getDeclaracao,
};
