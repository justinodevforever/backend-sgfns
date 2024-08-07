const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createServico = async (req, res) => {
  try {
    const { valor, tipo } = req.body;

    if (!valor || !tipo) return res.json({ message: "existe um campo vazio" });

    await prisma.servico.create({
      data: {
        valor,
        tipo,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getServicos = async (req, res) => {
  try {
    const response = await prisma.servico.findMany();
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getServico = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.servico.findFirst({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteServico = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.servico.delete({ where: { id } });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const upDateServico = async (req, res) => {
  try {
    const { id } = req.params;
    const { valor, tipo } = req.body;
    if (!valor || !tipo) return res.json("existe campo vazio");
    await prisma.servico.update({
      data: {
        valor,
        tipo,
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

const getServisoEspecifico = async (req, res) => {
  try {
    const { tipo } = req.body;

    const response = await prisma.servico.findFirst({
      where: {
        tipo,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ mensage: error });
  }
};

module.exports = {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  upDateServico,
  getServisoEspecifico,
};
