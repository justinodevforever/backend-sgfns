const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createListaRecurso = async (req, res) => {
  const { fk_recurso } = req.body;
  if (!fk_recurso) return res.json({ message: "error" });
  try {
    const response = await prisma.listaRecurso.create({
      data: {
        fk_recurso,
      },
    });
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getListaRecursos = async (req, res) => {
  try {
    const response = await prisma.listaRecurso.findMany({
      include: {
        recurso: {
          include: {
            estudante: true,
            disciplina: true,
            anoLectivo: true,
            AnoFrequencia: true,
            estudante: true,
          },
        },
      },
    });
    response.map((rec) => {
      if (typeof rec.recurso.rupe === "bigint") {
        rec.recurso.rupe = rec.recurso.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getListaRecursosEspecifica = async (req, res) => {
  const { turma, disciplina, frequencia, curso } = req.body;
  try {
    const response = await prisma.listaRecurso.findMany({
      include: {
        recurso: {
          include: {
            estudante: true,
            disciplina: true,
            anoLectivo: true,
            AnoFrequencia: true,
            estudante: true,
            Curso: true,
          },
        },
      },
      where: {
        recurso: {
          estudante: {
            turma,
          },
          Curso: {
            curso,
          },
          disciplina: {
            nome: disciplina,
          },
          AnoFrequencia: {
            ano: frequencia,
          },
        },
      },
    });
    response.map((rec) => {
      if (typeof rec.recurso.rupe === "bigint") {
        rec.recurso.rupe = rec.recurso.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getListaRecurso = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.listaRecurso.findFirst({
      include: {
        recurso: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

const deleteListaRecurso = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.listaRecurso.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};
const upDateListaRecurso = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_recurso } = req.body;
    await prisma.listaRecurso.update({
      data: {
        fk_recurso,
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

module.exports = {
  createListaRecurso,
  getListaRecurso,
  deleteListaRecurso,
  upDateListaRecurso,
  getListaRecursosEspecifica,
  getListaRecursos,
};
