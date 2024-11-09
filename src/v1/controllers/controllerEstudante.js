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
    const dataNascimento = new Date(response.dataNascimento);
    const dataHoje = new Date();

    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();
    const mes = dataHoje.getMonth() - dataNascimento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && dataHoje.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    res.json({ response: response, idade: idade });
  } catch (error) {
    res.json({ message: "error" });
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
    const dataNascimento = new Date(response.dataNascimento);
    const dataHoje = new Date();

    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();
    const mes = dataHoje.getMonth() - dataNascimento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && dataHoje.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    res.json({ response: response, idade: idade });
  } catch (error) {
    res.json({ message: error.message });
  }
};
const createEstudante = async (req, res) => {
  const {
    nome,
    bi,
    contato,
    fk_curso,
    turma,
    dataNascimento,
    sexo,
    fk_frequencia,
  } = req.body;
  try {
    if (
      !sexo ||
      !nome ||
      !bi ||
      !fk_curso ||
      !dataNascimento ||
      !fk_frequencia
    ) {
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
        dataNascimento,
        regime: "Pós-Laboral",
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
    const dataNascimento = new Date(response.dataNascimento);
    const dataHoje = new Date();

    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();
    const mes = dataHoje.getMonth() - dataNascimento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && dataHoje.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    res.json({ response: response, idade: idade });
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
    const dataNascimento = new Date(response.dataNascimento);
    const dataHoje = new Date();

    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();
    const mes = dataHoje.getMonth() - dataNascimento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && dataHoje.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    res.json({ response: response, idade: idade });
  } catch (error) {
    console.log(error.mensage);
  }
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

  const { nome, contato, fk_curso, sexo } = req.body;

  if (!nome || !contato || !fk_curso || !sexo) {
    res.json({ message: "error" });
    return;
  }

  try {
    const response = await prisma.estudante.update({
      data: {
        nome,
        contacto: contato,
        fk_curso,
        sexo,
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
const searchSpecific = async (req, res) => {
  const { curso, ano, frequencia } = req.body;
  try {
    if (curso && ano && frequencia) {
      const response = await prisma.estudante.findFirst({
        include: {
          curso: {},
          frequencia: true,
        },
        where: {
          curso: {
            curso,
          },

          frequencia: {
            ano: frequencia,
          },
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
