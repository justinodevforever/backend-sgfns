const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createAnoLetivo = async (req, res) => {
  const { ano } = req.body;
  try {
    if (!ano) return res.json({ message: "sucess" });

    const respose = await prisma.anoLectivo.findFirst({
      where: {
        ano,
      },
    });
    if (respose) return res.json({ message: "exist" });

    await prisma.anoLectivo.create({
      data: {
        ano,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getAnoLetivos = async (req, res) => {
  try {
    const response = await prisma.anoLectivo.findMany({
      orderBy: [{ ano: "asc" }],
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getAnoLetivo = async (req, res) => {
  const { id } = req.params;
  try {
    const ano = await prisma.anoLectivo.findFirst({
      where: {
        id,
      },
    });
    res.json(ano);
  } catch (error) {
    res.json(error);
  }
};
const buscaAnoLetivo = async (req, res) => {
  try {
    const { ano } = req.body;
    const response = await prisma.anoLectivo.findFirst({
      where: {
        ano,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await prisma.anoLectivo.findFirst({
      include: {
        cadeiraAtrasos: true,
        exameEspecial: true,
        recursos: true,
        reconfirmacao: true,
        matricula: true,
        inscricao: true,
        propina: true,
      },
      where: {
        id,
      },
    });
    if (
      response.cadeiraAtrasos.length > 0 ||
      response.exameEspecial.length > 0 ||
      response.recursos.length > 0 ||
      response.inscricao.length > 0 ||
      response.matricula.length > 0 ||
      response.propina.length > 0 ||
      response.reconfirmacao.length > 0
    )
      return res.json({
        status: 400,
        message:
          "Não Podes Eliminar Este Ano Lectivo Porque Tem uma Associação!",
      });

    await prisma.anoLectivo.delete({
      where: { id },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json(error);
  }
};
const upDateAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano } = req.body;
    if (!ano && !id) return res.json({ message: "error" });
    await prisma.anoLectivo.update({
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
const anoLetivoEspecifico = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.json({ message: "error" });
    const response = await prisma.anoLectivo.findFirst({
      include: {
        cadeiraAtrasos: true,
        exameEspecial: true,
        recursos: true,
        reconfirmacao: true,
        matricula: true,
        inscricao,
        propina,
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
  createAnoLetivo,
  getAnoLetivo,
  getAnoLetivos,
  deleteAnoLetivo,
  buscaAnoLetivo,
  upDateAnoLetivo,
  anoLetivoEspecifico,
};
