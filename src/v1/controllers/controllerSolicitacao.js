const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSolicitacao = async (req, res) => {
  const { fk_estudante, tipoServico } = req.body;
  try {
    if (!fk_estudante || !tipoServico) return res.json({ message: "error" });
    await prisma.solicitacao.create({
      data: {
        fk_estudante,
        status: "pendente",
        tipoServico,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getSolicitacao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.solicitacao.findFirst({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(errr.message);
  }
};

const getSolicitacoes = async (req, res) => {
  try {
    const response = await prisma.solicitacao.findMany({
      include: {
        estudante: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};
const getSolicitacaoEspecific = async (req, res) => {
  const { fk_estudante } = req.body;
  try {
    const response = await prisma.solicitacao.findMany({
      include: {
        estudante: true,
      },
      where: {
        fk_estudante,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};
const removeSolicitacao = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.solicitacao.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const updateSolicitacao = async (req, res) => {
  const { id } = req.params;
  const { status } = req.params;
  try {
    await prisma.solicitacao.update({
      data: {
        status,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    res.json({ message: "error" });
  }
};
module.exports = {
  createSolicitacao,
  getSolicitacao,
  getSolicitacaoEspecific,
  getSolicitacoes,
  removeSolicitacao,
  updateSolicitacao,
};
