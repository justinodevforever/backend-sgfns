const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createDisciplina = async (req, res) => {
  try {
    const { nome, fk_ano, fk_semestre, fk_curso } = req.body;
    if (!nome || !fk_semestre || !fk_curso || !fk_ano) {
      return res.json({ message: "error" });
    }
    await prisma.disciplina.create({
      data: {
        nome,
        fk_ano,
        fk_semestre,
        fk_curso,
      },
    });

    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getDisciplinas = async (req, res) => {
  try {
    const response = await prisma.disciplina.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const DisciplinasPorAnoCurso = async (req, res) => {
  try {
    const { ano, curso, semestre } = req.body;
    if (!ano || !curso || !semestre) {
      return res.json({ message: "error no" });
    }
    const response = await prisma.disciplina.findMany({
      include: {
        semestre: true,
        frequencia: true,
      },

      where: {
        frequencia: {
          ano,
        },
        semestre: {
          nome: semestre,
        },
        curso: {
          curso,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "erroree" });
  }
};
const DisciplinasEspecifico = async (req, res) => {
  try {
    const { fk_ano } = req.body;
    if (!fk_ano) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchDisciplina = async (req, res) => {
  try {
    const { nome } = req.body;
    if (!nome) {
      return res.json({ message: "error" });
    }
    const response = await prisma.disciplina.findFirst({
      where: {
        nome,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};

const deleteDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const upDateDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, fk_ano, fk_curso, fk_semestre } = req.body;
    if (!nome || !fk_curso || !fk_semestre || !fk_ano || !id) {
      return res.json({ message: "error" });
    }

    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

module.exports = {
  createDisciplina,
  getDisciplinas,
  getDisciplina,
  deleteDisciplina,
  upDateDisciplina,
  DisciplinasEspecifico,
  DisciplinasPorAnoCurso,
  searchDisciplina,
};
