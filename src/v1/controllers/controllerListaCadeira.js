const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createListaCadeira = async (req, res) => {
  const { fk_cadeira } = req.body;
  if (!fk_cadeira) return res.json({ message: "error" });
  try {
    const response = await prisma.listaCadeira.create({
      data: {
        fk_cadeira,
      },
    });
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getListaCadeiras = async (req, res) => {
  try {
    const response = await prisma.listaCadeira.findMany({
      include: {
        cadeira: {
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
      if (typeof rec.cadeira.rupe === "bigint") {
        rec.cadeira.rupe = rec.cadeira.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getListaCadeirasEspecifica = async (req, res) => {
  const { turma, regime, disciplina, frequencia, curso } = req.body;
  try {
    const response = await prisma.listaCadeira.findMany({
      include: {
        cadeira: {
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
        cadeira: {
          estudante: {
            regime,
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
      if (typeof rec.cadeira.rupe === "bigint") {
        rec.cadeira.rupe = rec.cadeira.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getListaCadeira = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.listaCadeira.findFirst({
      include: {
        cadeira: true,
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

const deleteListaCadeira = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.listaCadeira.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};
const upDateListaCadeira = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_cadeira } = req.body;
    await prisma.listaCadeira.update({
      data: {
        fk_cadeira,
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
  createListaCadeira,
  getListaCadeira,
  deleteListaCadeira,
  upDateListaCadeira,
  getListaCadeirasEspecifica,
  getListaCadeiras,
};
