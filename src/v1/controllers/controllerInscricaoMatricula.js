const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getinscricaoMatricula = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.inscricaoMatricula.findFirst({
      include: {
        curso: true,
        usuario: true,
      },
      where: {
        id,
      },
    });
    if (typeof response?.rupe === "bigint") {
      response.rupe = response?.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    res.status(401).json({ message: " error" });
  }
};
const buscainscricaoMatriculaPorBi = async (req, res) => {
  const { bi } = req.body;

  try {
    const response = await prisma.inscricaoMatricula.findFirst({
      include: {
        curso: true,
      },
      where: {
        bi,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const createinscricaoMatricula = async (req, res) => {
  const { nome, bi, contato, fk_curso, regime, sexo, valor, fk_user, rupe } =
    req.body;
  try {
    if (
      !sexo ||
      !nome ||
      !bi ||
      !contato ||
      !fk_curso ||
      !regime ||
      !valor ||
      !fk_user ||
      !rupe
    ) {
      res.json({ message: "error" });
      return;
    }

    const response = await prisma.inscricaoMatricula.create({
      data: {
        nome,
        bi,
        contacto: contato,
        fk_curso,
        regime,
        sexo,
        valor,
        fk_user,
        rupe,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }

    res.status(200).json({ response: response, message: "sucess" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: "error" });
  }
};

const getinscricaoMatriculas = async (req, res) => {
  try {
    const response = await prisma.inscricaoMatricula.findMany({
      include: {
        curso: true,
        usuario: true,
      },
    });
    response.map((p) => {
      if (typeof p.rupe === "bigint") {
        p.rupe = p.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getinscricaoMatriculaBi = async (req, res) => {
  try {
    const { bi } = req.body;
    const response = await prisma.inscricaoMatricula.findFirst({
      include: {
        curso: true,
        usuario: true,
      },
      where: {
        bi,
      },
    });

    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }

    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getinscricaoMatriculaEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.inscricaoMatricula.findFirst({
      include: {
        curso: true,
        usuario: true,
      },
      where: {
        id,
      },
    });

    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }

    res.json(response);
  } catch (error) {}
};
const getAllinscricaoMatricula = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.inscricaoMatricula.findMany({
      include: {
        curso: true,
        usuario: true,
      },
      where: {
        fk_user,
      },
    });
    response.map((p) => {
      if (typeof p.rupe === "bigint") {
        p.rupe = p.rupe.toString();
      }
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getinscricaoMatriculaPorUsuario = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.inscricaoMatricula.findFirst({
      include: {
        curso: true,
        usuario: true,
      },
      where: {
        fk_user,
      },
    });

    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }

    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteinscricaoMatricula = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.inscricaoMatricula.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateinscricaoMatricula = async (req, res) => {
  const { id } = req.params;

  const { nome, contato, fk_curso, regime } = req.body;

  if (!nome || !contato || !fk_curso || !regime) {
    res.json({ message: "error" });
    return;
  }

  try {
    const response = await prisma.inscricaoMatricula.update({
      data: {
        nome,
        contacto: contato,
        fk_curso,
        regime,
      },
      where: {
        id,
      },
    });

    res.status(200).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchinscricaoMatricula = async (req, res) => {
  const { nome } = req.body;
  try {
    if (nome !== "") {
      const response = await prisma.inscricaoMatricula.findFirst({
        include: {
          curso: {},
          usuario: true,
        },
        where: {
          nome,
        },
      });

      if (typeof response.rupe === "bigint") {
        response.rupe = response.rupe.toString();
      }

      res.json(response);
    }
  } catch (error) {
    res.json({ mensage: "error" });
  }
};
const relatorioInscricao = async (req, res) => {
  const { dataInicio, dataFinal } = req.body;

  try {
    const dataI = new Date(dataInicio);
    const dataF = new Date(dataFinal);
    const response = await prisma.inscricaoMatricula.findMany({
      include: {
        curso: true,
      },
      where: {
        dataSolicitacao: {
          gte: dataI,
          lte: dataF,
        },
      },
    });
    let value = {
      curso: {
        curso: "",
        totalM: 0,
        totalF: 0,
        totalGenero: 0,
        totalValor: 0,
      },
    };
    let da = new Set();
    const dados = response.reduce((acc, i) => {
      const key = i.curso.curso;
      if (!acc[key]) {
        acc[key] = {
          curso: key,
          totalM: 0,
          totalF: 0,
          totalGenero: 0,
          totalValor: 0,
          totalRegular: 0,
          totalPosLaboral: 0,
        };
      }
      if (i.sexo === "F" && acc[key]) acc[key].totalF++;
      if (i.sexo === "M" && acc[key]) acc[key].totalM++;
      if (i.regime === "Regular" && acc[key]) acc[key].totalRegular++;
      if (i.regime === "Pós-Laboral" && acc[key]) acc[key].totalPosLaboral++;
      acc[key].totalValor += i.valor;
      acc[key].totalGenero = acc[key].totalF + acc[key].totalM;
      value = acc[key];
      da.add(value);
      return acc;
    }, {});
    let resul = [];
    da.forEach((p) => {
      resul.push(p);
    });

    res.json(resul);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createinscricaoMatricula,
  getinscricaoMatricula,
  getinscricaoMatriculas,
  deleteinscricaoMatricula,
  upDateinscricaoMatricula,
  getinscricaoMatriculaEspecifico,
  getAllinscricaoMatricula,
  searchinscricaoMatricula,
  buscainscricaoMatriculaPorBi,
  getinscricaoMatriculaPorUsuario,
  getinscricaoMatriculaBi,
  relatorioInscricao,
};
