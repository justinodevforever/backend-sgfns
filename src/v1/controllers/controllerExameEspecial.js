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
    fk_frequencia,
    fk_ano,
  } = req.body;

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
      const response = await prisma.exameEspecial.create({
        data: {
          rupe,
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

const getExameEspecialEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.exameEspecial.findFirst({
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

const getExameEspecial = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.exameEspecial.findFirst({
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
const getExameEspecials = async (req, res) => {
  try {
    const response = await prisma.exameEspecial.findMany({
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
          fk_frquencia: fk_frequencia,
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
    const response = await prisma.recurso.findFirst({
      include: {
        disciplina: true,
        estudante: true,
        AnoFrequncia: true,
        semestre: true,
        anoLectivo: true,
        Curso: true,
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
