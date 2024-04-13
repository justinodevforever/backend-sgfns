const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const createAnoFrequencia = async (req, res) => {
  const { ano } = req.body;
  await prisma.anoFrequencia.create({
    data: {
      ano,
    },
  });
  try {
  } catch (error) {
    res.json(error);
  }
};

const getAnoFrequencias = async (req, res) => {
  try {
    const response = await prisma.anoFrequencia.findMany();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const anoFrequenciasEspecifico = async (req, res) => {
  const { fk_curso, fk_ano } = req.body;
  try {
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        curso: {},
      },
      where: {
        fk_ano,
        fk_curso,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const anoFrequenciasPorAno = async (req, res) => {
  const { fk_curso, ano } = req.body;
  try {
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        curso: {},
      },
      where: {
        ano,
        fk_curso,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const searchFrequencia = async (req, res) => {
  try {
    const { frequencia } = req.body;
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        curso: {},
      },
      where: {
        fk_ano: frequencia,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        curso: {},
      },
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.anoFrequencia.delete(id);
  } catch (error) {
    res.json(error);
  }
};
const upDateAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano, semestre } = req.body;
    await prisma.anoFrequencia.update({
      data: {
        ano,
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
  createAnoFrequencia,
  getAnoFrequencia,
  getAnoFrequencias,
  deleteAnoFrequencia,
  upDateAnoFrequencia,
  anoFrequenciasPorAno,
  searchFrequencia,
};
