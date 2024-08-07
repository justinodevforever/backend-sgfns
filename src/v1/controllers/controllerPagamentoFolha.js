const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPagamentoFolha = async (req, res) => {
  const { valor, fk_user } = req.body;

  try {
    await prisma.pagamentoFolha.create({
      data: {
        valor,
        fk_user,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getPagamentoFolhas = async (req, res) => {
  try {
    const response = await prisma.pagamentoFolha.findMany({
      include: {
        usuario: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getPagamentoFolha = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.pagamentoFolha.findFirst({
      include: {
        usuario: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const UpdatePagamentoFolha = async (req, res) => {
  const { id } = req.params;
  const { valor } = req.body;
  try {
    await prisma.pagamentoFolha.update({
      data: {
        valor,
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
const deletePagamentoFolha = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.pagamentoFolha.delete({
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const movimentoPagamentoFolha = async (req, res) => {
  const { dataFinal, dataInicial } = req.body;
  const dataI = new Date(dataInicial);
  const dataF = new Date(dataFinal);

  const jaExiste = await prisma.pagamentoFolha.findMany({
    where: {
      NOT: {
        dataSolicitacao: {
          gte: dataI,
          lte: dataF,
        },
      },
    },
  });
  const intervalo = await prisma.pagamentoFolha.findMany({
    where: {
      dataSolicitacao: {
        gte: dataI,
        lte: dataF,
      },
    },
  });
  let listaIntervalo = {
    laboral: {
      totalEstudante: 0,
      totalPropina: 0,
    },
    regular: {
      totalEstudante: 0,
      totalPropina: 0,
    },
    totalGeral: {
      totalEstudante: 0,
      totalPropina: 0,
    },
  };
  let listaExiste = {
    laboral: {
      totalEstudante: 0,
      totalPropina: 0,
    },
    regular: {
      totalEstudante: 0,
      totalPropina: 0,
    },
    totalGeral: {
      totalEstudante: 0,
      totalPropina: 0,
    },
  };

  intervalo.reduce((acc, p) => {
    if (!acc["regular"]) {
      acc["regular"] = {
        totalEstudante: 0,
        totalPropina: 0,
      };
    }

    if (!acc["totalGeral"]) {
      acc["totalGeral"] = {
        totalEstudante: 0,
        totalPropina: 0,
        totalAllStudant: 0,
        totalAllValue: 0,
      };
    }

    acc["regular"].totalEstudante++;
    acc["regular"].totalPropina += p.valor;

    acc["totalGeral"].totalEstudante++;
    acc["totalGeral"].totalPropina += p.valor;

    listaIntervalo.regular = acc["regular"] || {
      totalEstudante: 0,
      totalPropina: 0,
    };
    listaIntervalo.totalGeral = acc["totalGeral"] || {
      totalEstudante: 0,
      totalPropina: 0,
      totalAllStudant: 0,
      totalAllValue: 0,
    };
    return acc;
  }, {});
  jaExiste.reduce((acc, p) => {
    if (!acc["regular"]) {
      acc["regular"] = {
        totalEstudante: 0,
        totalPropina: 0,
      };
    }

    if (!acc["totalGeral"]) {
      acc["totalGeral"] = {
        totalEstudante: 0,
        totalPropina: 0,
      };
    }

    acc["regular"].totalEstudante++;
    acc["regular"].totalPropina += p.valor;

    acc["totalGeral"].totalEstudante++;
    acc["totalGeral"].totalPropina += p.valor;

    listaExiste.regular = acc["regular"] || {
      totalEstudante: 0,
      totalPropina: 0,
    };
    listaExiste.totalGeral = acc["totalGeral"] || {
      totalEstudante: 0,
      totalPropina: 0,
      totalAllStudant: 0,
      totalAllValue: 0,
    };
    return acc;
  }, {});
  res.json({ totalExiste: listaExiste, totalIntervalo: listaIntervalo });
};

module.exports = {
  createPagamentoFolha,
  getPagamentoFolha,
  getPagamentoFolhas,
  UpdatePagamentoFolha,
  deletePagamentoFolha,
  movimentoPagamentoFolha,
};
