const { PrismaClient } = require("@prisma/client");
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
  } = req.body;
  console.log(fk_frequencia);
  try {
    if (
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_semestre !== 0 ||
      fk_ano !== 0 ||
      rupe !== 0
    ) {
      const response = await prisma.cadeiraAtraso.create({
        data: {
          rupe: 4784,
          valor,
          fk_ano,
          fk_curso,
          fk_disciplina,
          fk_estudante,
          fk_frquencia: fk_frequencia,
          fk_semestre,
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
  } catch (error) {}
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
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      fk_semestre !== 0 ||
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
