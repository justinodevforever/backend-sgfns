const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMatricula = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.matricula.findFirst({
      include: {
        curso: true,
        usuario: true,
        anoLetivo: true,
      },
      where: {
        id,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    const dataNascimento = new Date(response.dataNascimento);
    const dataHoje = new Date();

    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();
    const mes = dataHoje.getMonth() - dataNascimento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && dataHoje.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    res.json({ response: response, idade: idade });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const buscaMatriculaPorBi = async (req, res) => {
  const { bi } = req.body;

  try {
    const response = await prisma.matricula.findFirst({
      include: {
        curso: true,
        anoLetivo: true,
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
const createMatricula = async (req, res) => {
  const {
    nome,
    bi,
    contato,
    fk_curso,
    sexo,
    fk_frequencia,
    dataNascimento,
    valor,
    rupe,
    fk_user,
    fk_ano,
  } = req.body;
  try {
    if (
      !sexo ||
      !nome ||
      !bi ||
      !fk_curso ||
      !fk_frequencia ||
      !dataNascimento ||
      !valor ||
      !fk_ano ||
      !fk_user
    ) {
      res.json({ message: "error" });
      return;
    }
    const resp = await prisma.matricula.findFirst({
      where: {
        bi,
      },
    });
    if (resp) {
      res.json({ message: "exist" });
      return;
    }
    const response = await prisma.matricula.create({
      data: {
        nome,
        bi,
        contacto: contato,
        fk_curso,
        regime: "Pós-Laboral",
        sexo,
        valor,
        fk_user,
        dataNascimento,
        rupe,
        fk_ano,
        fk_frequencia,
      },
    });
    const es = await prisma.estudante.create({
      data: {
        nome,
        bi,
        contacto: contato,
        dataNascimento,
        fk_curso,
        sexo,
        fk_frequencia,
        regime: "Pós-Laboral",
      },
    });

    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }

    res.status(200).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getMatriculas = async (req, res) => {
  try {
    const response = await prisma.matricula.findMany({
      include: {
        curso: true,
        usuario: true,
        anoLetivo: true,
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

const getMatriculaBi = async (req, res) => {
  try {
    const { bi } = req.body;
    const response = await prisma.matricula.findFirst({
      include: {
        curso: true,
        usuario: true,
        anoLetivo: true,
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
const getMatriculaEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.matricula.findFirst({
      include: {
        curso: true,
        usuario: true,
        anoLetivo: true,
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
const getAllMatricula = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.matricula.findMany({
      include: {
        curso: true,
        usuario: true,
        anoLetivo: true,
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
const getMatriculaPorUsuario = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await prisma.matricula.findFirst({
      include: {
        curso: true,
        usuario: true,
        anoLetivo: true,
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

const deleteMatricula = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.matricula.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateMatricula = async (req, res) => {
  const { id } = req.params;

  const { nome, contato, fk_curso } = req.body;

  if (!nome || !contato || !fk_curso) {
    res.json({ message: "error" });
    return;
  }

  try {
    const response = await prisma.matricula.update({
      data: {
        nome,
        contacto: contato,
        fk_curso,
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
const searchMatricula = async (req, res) => {
  const { nome } = req.body;
  try {
    if (nome !== "") {
      const response = await prisma.matricula.findFirst({
        include: {
          curso: {},
          usuario: true,
          anoLetivo: true,
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
const relatorioMatricula = async (req, res) => {
  const { dataInicio, dataFinal, ano } = req.body;

  try {
    const dataI = new Date(dataInicio);
    const dataF = new Date(dataFinal);
    const response = await prisma.matricula.findMany({
      include: {
        curso: true,
        anoLetivo: true,
      },
      where: {
        dataSolicitacao: {
          gte: dataI,
          lte: dataF,
        },
        anoLetivo: {
          ano,
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
      // console.log(p);
    });

    res.json(resul);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const countMatricula = async (req, res) => {
  const { ano, dataInicial, dataFinal } = req.body;
  const dataI = new Date(dataInicial);
  const dataF = new Date(dataFinal);
  try {
    const response = await prisma.matricula.count({
      where: {
        frequencia: {
          ano: "1º",
        },
        anoLetivo: {
          ano,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const listaMatriculas = async (req, res) => {
  const { ano, curso, frequencia } = req.body;
  try {
    const response = await prisma.matricula.findMany({
      include: {
        curso: true,
        usuario: true,
        anoLetivo: true,
      },
      where: {
        anoLetivo: {
          ano,
        },
        frequencia: {
          ano: frequencia,
        },
        curso: {
          curso,
        },
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

module.exports = {
  createMatricula,
  getMatricula,
  getMatriculas,
  deleteMatricula,
  upDateMatricula,
  getMatriculaEspecifico,
  getAllMatricula,
  searchMatricula,
  buscaMatriculaPorBi,
  getMatriculaPorUsuario,
  getMatriculaBi,
  relatorioMatricula,
  countMatricula,
  listaMatriculas,
};
