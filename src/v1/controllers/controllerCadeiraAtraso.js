const { PrismaClient } = require("@prisma/client");
const { format } = require("date-fns");
const prisma = new PrismaClient();

const createCadeiraAtraso = async (req, res) => {
  const {
    valor,
    rupe,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_frequencia,
    fk_ano,
    fk_user,
  } = req.body;
  try {
    if (
      !valor ||
      !fk_user ||
      !fk_curso ||
      !fk_disciplina ||
      !fk_estudante ||
      !fk_frequencia ||
      !fk_semestre ||
      !fk_ano ||
      !rupe
    ) {
      const response = await prisma.cadeiraAtraso.create({
        data: {
          rupe,
          valor,
          fk_ano,
          fk_curso,
          fk_disciplina,
          fk_estudante,
          fk_frquencia: fk_frequencia,
          fk_semestre,
          fk_user,
        },
      });
      if (typeof response.rupe === "bigint") {
        response.rupe = response.rupe.toString();
      }
      res.status(201).json({ response: response, message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getCadeiraAtrazoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.cadeiraAtraso.findFirst({
      include: {
        AnoFrequncia: true,
        anoLectivo: true,
        Curso: true,
        disciplina: true,
        estudante: true,
        semestre: true,
        usuario: true,
      },
      where: {
        id,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getCadeiraAtraso = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.cadeiraAtraso.findFirst({
      include: {
        AnoFrequncia: true,
        anoLectivo: true,
        Curso: true,
        disciplina: true,
        estudante: true,
        semestre: true,
        usuario: true,
      },
      where: {
        id,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getCadeiraAtrasos = async (req, res) => {
  try {
    const response = await prisma.cadeiraAtraso.findMany({
      include: {
        AnoFrequncia: true,
        anoLectivo: true,
        Curso: true,
        disciplina: true,
        estudante: true,
        semestre: true,
        usuario: true,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "sucess" });
  }
};
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    return res.json({ message: "error" });
  }
  try {
    const response = await prisma.cadeiraAtraso.findFirst({
      include: {
        disciplina: true,
        estudante: true,
        AnoFrequncia: true,
        semestre: true,
        anoLectivo: true,
        Curso: true,
        usuario: true,
      },
      where: {
        estudante: {
          bi,
        },
        AnoFrequncia: {
          ano: frequencia,
        },
        anoLectivo: {
          ano,
        },
        semestre: {
          nome: semestre,
        },
        Curso: {
          curso,
        },
        disciplina: {
          nome: disciplina,
        },
      },
    });
    if (typeof response?.rupe === "bigint" && response?.rupe) {
      response.rupe = response.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};
const deleteCadeiraAtrasos = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {}
};

const upDateCadeiraAtraso = async (req, res) => {
  const {
    valor,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_frequencia,
    fk_ano,
    rupe,
  } = req.body;
  try {
    const { id } = req.params;

    if (
      valor ||
      fk_curso ||
      fk_disciplina ||
      fk_estudante ||
      fk_frequencia ||
      fk_ano ||
      fk_semestre ||
      !rupe ||
      !id
    ) {
      res.json({ message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    res.status(201).json({ message: "error" });
  }
};

module.exports = {
  createCadeiraAtraso,
  getCadeiraAtraso,
  getCadeiraAtrasos,
  deleteCadeiraAtrasos,
  upDateCadeiraAtraso,
  getCadeiraAtrazoEspecifico,
  buscarCadeira,
};
