const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createExameEspecial = async (req, res) => {
  const {
    valor,
    rupe,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_ano,
    fk_frequencia,
  } = req.body;

  try {
    if (
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      rupe !== 0 ||
      fk_semestre !== 0
    ) {
      await prisma.exameEspecial.create({
        data: {
          valor,
          rupe,
          fk_estudante,
          fk_semestre,
          fk_curso,
          fk_disciplina,
          fk_ano,
          fk_frquencia,
        },
      });
      res.status(201).json({ message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getExameEspecialEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.exameEspecial.findFirst({
      include: {
        AnoFrequncia: {},
        Curso: {},
        disciplina: {},
        estudante: {},
        semestre: {},
        anoLectivo: {},
      },
      where: {
        id,
      },
    });
  } catch (error) {}
};

const getExameEspecial = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.exameEspecial.findFirst({
      include: {
        AnoFrequncia: {},
        Curso: {},
        disciplina: {},
        estudante: {},
        semestre: {},
        anoLectivo: {},
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {}
};
const getExameEspecials = async (req, res) => {
  try {
    const response = await prisma.exameEspecial.findMany({
      include: {
        AnoFrequncia: {},
        Curso: {},
        disciplina: {},
        estudante: {},
        semestre: {},
        anoLectivo: {},
      },
    });
    res.json(response);
  } catch (error) {}
};
const deleteExameEspecials = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.exameEspecial.delete(id);
  } catch (error) {}
};

const upDateExameEspecial = async (req, res) => {
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
      fk_disciplina !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      fk_semestre !== 0 ||
      rupe !== 0
    ) {
      await prisma.exameEspecial.update({
        data: {
          valor,
          fk_ano,
          fk_curso,
          fk_disciplina,
          fk_estudante,
          fk_frquencia,
          fk_semestre,
        },
        where: {
          id,
        },
      });
      res.status(201).json({ message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    res.status(201).json({ message: "error" });
  }
};
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    return res.json({ message: "error" });
  }
  try {
    const response = await prisma.exameEspecial.findFirst({
      include: {
        AnoFrequncia: {},
        Curso: {},
        disciplina: {},
        estudante: {},
        semestre: {},
        anoLectivo: {},
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createExameEspecial,
  getExameEspecial,
  getExameEspecials,
  deleteExameEspecials,
  upDateExameEspecial,
  buscarCadeira,
  getExameEspecialEspecifico,
};
