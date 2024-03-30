const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createAnoLetivo = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};

const getAnoLetivos = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getAnoLetivo = async (req, res) => {
  try {
    const user = await prisma.anoLectivo.findFirst({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const buscaAnoLetivo = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoLetivo = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const upDateAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createAnoLetivo,
  getAnoLetivo,
  getAnoLetivos,
  deleteAnoLetivo,
  buscaAnoLetivo,
  upDateAnoLetivo,
};
