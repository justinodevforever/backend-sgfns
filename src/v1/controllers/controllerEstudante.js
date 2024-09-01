const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEstudante = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.estudante.findFirst({
      include: {
        curso: true,
        frequencia: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(401).json({ message: "error" });
  }
};
const buscaEstudantePorBi = async (req, res) => {
  const { bi } = req.body;

  try {
    const response = await prisma.estudante.findFirst({
      include: {
        curso: true,
        frequencia: true,
      },
      where: {
        bi,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const createEstudante = async (req, res) => {
  const { nome, bi, contato, fk_curso, regime, turma, sexo, fk_frequencia } =
    req.body;
  try {
    if (!sexo || !nome || !bi || !fk_curso || !regime || !fk_frequencia) {
      res.json({ message: "error" });
      return;
    }
    const resp = await prisma.estudante.findFirst({
      where: {
        bi,
      },
    });
    if (resp) {
      res.json({ message: "exist" });
      return;
    }
    const response = await prisma.estudante.create({
      data: {
        nome,
        bi,
        contacto: contato,
        fk_curso,
        regime,
        sexo,
        turma,
        fk_frequencia,
      },
    });

    res.status(200).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getEstudantes = async (req, res) => {
  try {
    const response = await prisma.estudante.findMany({
      include: {
        curso: true,
        frequencia: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getEstudanteBi = async (req, res) => {
  try {
    const { bi } = req.body;
    const response = await prisma.estudante.findFirst({
      include: {
        curso: true,
        frequencia: true,
      },
      where: {
        bi,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getEstudanteEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.estudante.findFirst({
      include: {
        curso: true,
        frequencia: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {}
};
const getAllEstudante = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.estudante.findMany({
      include: {
        curso: true,
      },
      where: {
        fk_user,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getEstudantePorUsuario = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.estudante.findFirst({
      include: {
        curso: true,
      },
      where: {
        fk_user,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteEstudante = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.estudante.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateEstudante = async (req, res) => {
  const { id } = req.params;

  const { nome, contato, fk_curso, regime } = req.body;

  if (!nome || !contato || !fk_curso || !regime) {
    res.json({ message: "error" });
    return;
  }

  try {
    const response = await prisma.estudante.update({
      data: {
        nome,
        contacto: contato,
        fk_curso,
        regime,
      },
      where: {
        id,
      },
    });

    res.status(200).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchEstudante = async (req, res) => {
  const { nome } = req.body;
  try {
    if (nome !== "") {
      const response = await prisma.estudante.findFirst({
        include: {
          curso: {},
          frequencia: true,
        },
        where: {
          nome,
        },
      });
      res.json(response);
    }
  } catch (error) {
    res.json({ mensage: "error" });
  }
};

module.exports = {
  createEstudante,
  getEstudante,
  getEstudantes,
  deleteEstudante,
  upDateEstudante,
  getEstudanteEspecifico,
  getAllEstudante,
  searchEstudante,
  buscaEstudantePorBi,
  getEstudantePorUsuario,
  getEstudanteBi,
};
