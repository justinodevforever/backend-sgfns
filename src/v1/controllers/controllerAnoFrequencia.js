const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const createAnoFrequencia = async (req, res) => {
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
  } catch (error) {
    res.json(error);
  }
};
const anoFrequenciasPorAno = async (req, res) => {
  const { fk_curso, ano } = req.body;
  try {
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const searchFrequencia = async (req, res) => {
  try {
    const { frequencia } = req.body;

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano, semestre } = req.body;
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
