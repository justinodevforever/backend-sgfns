const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createListaExameEspecial = async (req, res) => {
  const { fk_exame } = req.body;
  if (!fk_exame) return res.json({ message: "error" });
  try {
    const response = await prisma.listaExameEspecial.create({
      data: {
        fk_exame,
      },
    });
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getListaExameEspecials = async (req, res) => {
  try {
    const response = await prisma.listaExameEspecial.findMany({
      include: {
        exame: {
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
      if (typeof rec.exame.rupe === "bigint") {
        rec.exame.rupe = rec.exame.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getListaExameEspecialsEspecifica = async (req, res) => {
  const { turma, regime, disciplina, frequencia, curso } = req.body;
  try {
    const response = await prisma.listaExameEspecial.findMany({
      include: {
        exame: {
          include: {
            disciplina: true,
            anoLectivo: true,
            AnoFrequncia: true,
            estudante: true,
            Curso: true,
          },
        },
      },
      // where: {
      //   exame: {
      //     estudante: {
      //       regime,
      //       turma,
      //     },
      //     Curso: {
      //       curso,
      //     },
      //     disciplina: {
      //       nome: disciplina,
      //     },
      //     AnoFrequencia: {
      //       ano: frequencia,
      //     },
      //   },
      // },
    });
    console.log(response);
    response.map((rec) => {
      if (typeof rec.exame.rupe === "bigint") {
        rec.exame.rupe = rec.exame.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    console.log({ message: error.message });
  }
};
const getListaExameEspecial = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.listaExameEspecial.findFirst({
      include: {
        exame: true,
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

const deleteListaExameEspecial = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.listaExameEspecial.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};
const upDateListaExameEspecial = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_exame } = req.body;
    await prisma.listaExameEspecial.update({
      data: {
        fk_exame,
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
  createListaExameEspecial,
  getListaExameEspecial,
  deleteListaExameEspecial,
  upDateListaExameEspecial,
  getListaExameEspecialsEspecifica,
  getListaExameEspecials,
};
