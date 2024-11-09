const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createDeclaracoes = async (req, res) => {
  const { fk_estudante, fk_user, fk_frequencia, tipoDeclaracao, valor } =
    req.body;
  try {
    const response = await prisma.declaracao.create({
      data: {
        tipoDeclaracao,
        fk_estudante,
        fk_user,
        fk_frequencia,
        valor,
      },
    });
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getDeclaracoes = async (req, res) => {
  try {
    const response = await prisma.declaracao.findMany({
      include: {
        usuario: true,
        estudante: true,
        frequencia: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getDeclaracao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.declaracao.findFirst({
      include: {
        usuario: true,
        estudante: {
          include: {
            curso: true,
          },
        },
        frequencia: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.declaracao.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
    const { frequencia, dataSolicitacao, valor } = req.body;
    await prisma.declaracao.update({
      data: {
        frequencia,
        dataSolicitacao,
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
const movimentoDeclaracao = async (req, res) => {
  const { dataFinal, dataInicial, tipoDeclaracao } = req.body;
  const dataI = new Date(dataInicial);
  const dataF = new Date(dataFinal);

  const jaExiste = await prisma.declaracao.findMany({
    include: {
      estudante: true,
    },
    where: {
      NOT: {
        dataSolicitacao: {
          gte: dataI,
          lte: dataF,
        },
      },
      tipoDeclaracao,
    },
  });
  const intervalo = await prisma.declaracao.findMany({
    include: {
      estudante: true,
    },
    where: {
      dataSolicitacao: {
        gte: dataI,
        lte: dataF,
      },
      tipoDeclaracao,
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
    if (!acc["laboral"]) {
      acc["laboral"] = {
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
    listaExiste.laboral = acc["laboral"] || {
      totalEstudante: 0,
      totalPropina: 0,
    };
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

const listaDeclaracao = async (req, res) => {
  const { dataInicial, dataFinal, tipo, curso } = req.body;

  const dataF = new Date(dataFinal);
  const dataI = new Date(dataInicial);

  try {
    const response = await prisma.declaracao.findMany({
      include: {
        estudante: {
          include: {
            curso: true,
          },
        },
        frequencia: true,
        usuario: true,
      },
      where: {
        dataSolicitacao: {
          gte: dataI,
          lte: dataF,
        },
        estudante: {
          curso: {
            curso,
          },
        },
        tipoDeclaracao: tipo,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createDeclaracoes,
  getDeclaracoes,
  deleteDeclaracoes,
  upDateDeclaracoes,
  getDeclaracao,
  movimentoDeclaracao,
  listaDeclaracao,
};
