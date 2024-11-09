const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createMes = async (req, res) => {
  try {
    const { mes, algarismo } = req.body;
    if (!mes || !algarismo) return res.json({ message: "error" });
    const respose = await prisma.mes.findFirst({
      where: {
        mes,
      },
    });
    if (respose) return res.json({ message: "exist" });
    await prisma.mes.create({
      data: {
        mes,
        algarismo,
      },
    });
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getMeses = async (req, res) => {
  try {
    const response = await prisma.mes.findMany({
      orderBy: { algarismo: "asc" },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getMes = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.mes.findFirst({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const buscaMes = async (req, res) => {
  try {
    const { mes } = req.body;
    const response = await prisma.mes.findFirst({
      where: {
        mes,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteMes = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await prisma.mes.findFirst({
      include: {
        propina: true,
      },
      where: {
        id,
      },
    });
    if (response.propina.length > 0)
      return res.json({
        status: 400,
        message: "Não Podes Eliminar Este Mês Porque Tem uma Associação!",
      });
    await prisma.mes.delete({ where: { id } });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json(error);
  }
};
const upDateMes = async (req, res) => {
  try {
    const { id } = req.params;
    const { mes, algarismo } = req.body;
    const response = await prisma.mes.update({
      data: {
        mes,
        algarismo,
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

module.exports = {
  createMes,
  getMes,
  getMeses,
  deleteMes,
  upDateMes,
  buscaMes,
};
