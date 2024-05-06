const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createAnoLetivo = async (req, res) => {
  const { ano } = req.body;
  try {
    if (!ano) return res.json({ message: "sucess" });
    await prisma.anoLectivo.create({
      data: {
        ano,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getAnoLetivos = async (req, res) => {
  try {
    const response = await prisma.anoLectivo.findMany({
      orderBy: [{ ano: "asc" }],
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getAnoLetivo = async (req, res) => {
  const { id } = req.params;
  try {
    const ano = await prisma.anoLectivo.findFirst({
      where: {
        id,
      },
    });
    res.json(ano);
  } catch (error) {
    res.json(error);
  }
};
const buscaAnoLetivo = async (req, res) => {
  try {
    const { ano } = req.body;
    const response = await prisma.anoLectivo.findFirst({
      where: {
        ano,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.anoLectivo.delete({
      where: { id },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json(error);
  }
};
const upDateAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano } = req.body;
    if (!ano && !id) return res.json({ message: "error" });
    const user = await prisma.anoLectivo.update({
      data: {
        ano,
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
  createAnoLetivo,
  getAnoLetivo,
  getAnoLetivos,
  deleteAnoLetivo,
  buscaAnoLetivo,
  upDateAnoLetivo,
};
