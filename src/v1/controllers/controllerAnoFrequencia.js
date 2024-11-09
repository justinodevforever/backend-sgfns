const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const createAnoFrequencia = async (req, res) => {
  try {
    const { ano } = req.body;
    if (!ano) return res.json({ message: "error" });

    const respose = await prisma.anoFrequencia.findFirst({
      where: {
        ano,
      },
    });
    if (respose) return res.json({ message: "exist" });

    await prisma.anoFrequencia.create({
      data: {
        ano,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getAnoFrequencias = async (req, res) => {
  try {
    const response = await prisma.anoFrequencia.findMany({
      orderBy: [{ ano: "asc" }],
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const anoFrequenciasEspecifico = async (req, res) => {
  const { fk_curso, fk_ano } = req.body;
  try {
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        curso: {},
      },
      where: {
        fk_ano,
        fk_curso,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const anoFrequenciasPorAno = async (req, res) => {
  const { fk_curso, ano } = req.body;
  try {
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        curso: {},
      },
      where: {
        ano,
        fk_curso,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const searchFrequencia = async (req, res) => {
  try {
    const { frequencia } = req.body;

    const response = await prisma.anoFrequencia.findFirst({
      where: {
        ano: frequencia,
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error.message);
  }
};
const getAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        curso: {},
      },
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.json({ message: "error" });

    const response = await prisma.anoFrequencia.findFirst({
      include: {
        cadeiraAtrasos: true,
        exameEspecial: true,
        recursos: true,
        reconfirmacoa: true,
        estudante: true,
        disciplina: true,
        matricula: true,
      },
      where: {
        id,
      },
    });
    if (
      response.cadeiraAtrasos.length > 0 ||
      response.exameEspecial.length > 0 ||
      response.recursos.length > 0 ||
      response.estudante.length > 0 ||
      response.disciplina.length > 0 ||
      response.matricula.length > 0 ||
      response.reconfirmacoa.length > 0
    )
      return res.json({
        status: 400,
        message:
          "Não Podes Eliminar Esta Frequência Porque Tem uma Associação!",
      });

    await prisma.anoFrequencia.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const upDateAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano } = req.body;
    if (!ano || !id) return res.json({ message: "error" });
    await prisma.anoFrequencia.update({
      data: {
        ano,
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
const frequenciaespecifico = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.json({ message: "error" });
    const response = await prisma.anoFrequencia.findFirst({
      include: {
        cadeiraAtrasos: true,
        exameEspecial: true,
        recursos: true,
        reconfirmacoa: true,
        estudante: true,
        disciplina: true,
        matricula: true,
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

module.exports = {
  createAnoFrequencia,
  getAnoFrequencia,
  getAnoFrequencias,
  deleteAnoFrequencia,
  upDateAnoFrequencia,
  anoFrequenciasPorAno,
  searchFrequencia,
  frequenciaespecifico,
};
