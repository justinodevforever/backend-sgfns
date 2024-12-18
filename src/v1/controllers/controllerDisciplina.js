const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createDisciplina = async (req, res) => {
  const { nome, fk_ano, fk_semestre, fk_curso, abreviatura } = req.body;

  const respose = await prisma.disciplina.findFirst({
    where: {
      fk_ano,
      fk_semestre,
      nome,
      fk_curso,
    },
  });
  if (respose) return res.json({ message: "exist" });

  try {
    if (!nome || !fk_semestre || !fk_curso || !fk_ano) {
      return res.json({ message: "error" });
    }
    await prisma.disciplina.create({
      data: {
        nome,
        fk_ano,
        fk_semestre,
        fk_curso,
        abreviatura,
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
      return res.json({ message: "error" });
    }
    const response = await prisma.disciplina.findMany({
      include: {
        semestre: true,
        frequencia: true,
        curso: true,
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
    res.json({ message: "error" });
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
    const response = await prisma.disciplina.findFirst({
      include: {
        curso: true,
        frequencia: true,
        semestre: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getDisciplinaPorCursoFrequencia = async (req, res) => {
  try {
    const { ano, curso } = req.body;

    const response = await prisma.disciplina.findMany({
      include: {
        curso: true,
        frequencia: true,
        semestre: true,
      },
      where: {
        curso: {
          curso,
        },
        frequencia: {
          ano,
        },
      },
    });
    res.json(response);
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
    await prisma.disciplina.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const upDateDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, fk_ano, fk_curso, fk_semestre, abreviatura } = req.body;
    if (!nome || !fk_curso || !fk_semestre || !fk_ano || !id) {
      return res.json({ message: "error" });
    }
    await prisma.disciplina.update({
      data: {
        nome,
        fk_ano,
        fk_curso,
        fk_semestre,
        abreviatura,
      },
      where: { id },
    });
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
  getDisciplinaPorCursoFrequencia,
};
