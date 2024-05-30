const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createReconfirmacao = async (req, res) => {
  try {
    const {
      valor,
      rupe,
      fk_semestre,
      fk_estudante,
      fk_curso,
      fk_user,
      fk_ano,
      fk_frequencia,
    } = req.body;

    if (
      valor === 0 ||
      rupe === 0 ||
      valor === undefined ||
      rupe === undefined ||
      fk_ano === "" ||
      fk_ano === undefined ||
      fk_curso === "" ||
      fk_curso === undefined ||
      fk_estudante === "" ||
      fk_estudante === undefined ||
      fk_semestre === "" ||
      fk_semestre === undefined ||
      fk_user === "" ||
      fk_user === undefined ||
      fk_frequencia === null ||
      fk_frequencia === undefined
    ) {
      res.status(201).json({ message: "error" });
      return;
    }

    const response = await prisma.reconfirmacao.create({
      data: {
        valor: 2203,
        rupe: 7728827,
        fk_ano,
        fk_curso,
        fk_estudante,
        fk_frequencia,
        fk_semestre,
        fk_user,
      },
    });
    if (typeof response?.rupe === "bigint") {
      response.rupe = response?.rupe?.toString();
    }
    res.status(201).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getReconfirmacoes = async (req, res) => {
  try {
    const response = await prisma.reconfirmacao.findMany({
      include: {
        usuario: true,
        frequencia: true,
        semestre: true,
        anoLectivo: true,
        estudante: true,
        curso: true,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    res.json({ messsage: "error" });
  }
};
const getReconfirmacaoRelatorio = async (req, res) => {
  try {
    const { ano, semestre, bi } = req.body;

    const response = await prisma.reconfirmacao.findFirst({
      include: {
        usuario: true,
        estudante: true,
        semestre: true,
        frequencia: true,
        anoLectivo: true,
        curso: true,
      },
      where: {
        estudante: {
          bi,
        },
        anoLectivo: {
          ano,
        },
        semestre: {
          nome: semestre,
        },
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getReconfirmacaoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.reconfirmacao.findFirst({
      include: {
        usuario: true,
        estudante: true,
        semestre: true,
        frequencia: true,
        anoLectivo: true,
        curso: true,
      },
      where: {
        id,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.reconfirmacao.findFirst({
      include: {
        usuario: true,
        estudante: true,
        semestre: true,
        frequencia: true,
        anoLectivo: true,
        curso: true,
      },
      where: {
        id,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const deleteReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.reconfirmacao.delete({
      where: { id },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const upDateReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      valor,
      rupe,
      fk_curso,
      fk_estudante,
      fk_user,
      fk_ano,
      fk_anoFrequencia,
      ano,
    } = req.body;
    const response = await prisma.reconfirmacao.update({
      data: {
        valor,
        rupe,
        fk_ano,
        fk_curso,
        fk_estudante,
        fk_semestre,
        fk_user,
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
  createReconfirmacao,
  getReconfirmacoes,
  getReconfirmacao,
  deleteReconfirmacao,
  upDateReconfirmacao,
  getReconfirmacaoRelatorio,
  getReconfirmacaoEspecifico,
};
