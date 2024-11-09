const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createReconfirmacao = async (req, res) => {
  try {
    const {
      valor,
      rupe,
      fk_semestre,
      fk_estudante,
      fk_ano,
      fk_frequencia,
      fk_user,
    } = req.body;

    if (
      !valor ||
      !rupe ||
      !fk_ano ||
      !fk_estudante ||
      !fk_semestre ||
      !fk_user ||
      !fk_frequencia
    ) {
      res.status(201).json({ message: "error" });
      return;
    }
    const reconf = await prisma.reconfirmacao.findFirst({
      where: {
        fk_semestre,
        fk_estudante,
        fk_ano,
        fk_frequencia,
      },
    });

    if (reconf) return res.json({ message: "exist" });

    await prisma.reconfirmacao.updateMany({
      data: {
        pivo: false,
      },
      where: { pivo: true },
    });
    await prisma.estudante.update({
      data: {
        fk_frequencia,
      },
      where: {
        id: fk_estudante,
      },
    });
    const response = await prisma.reconfirmacao.create({
      data: {
        valor,
        rupe,
        fk_ano,
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
    console.log(error.message);
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
      },
    });
    response.map((p) => {
      if (typeof p.rupe === "bigint") {
        p.rupe = p.rupe.toString();
      }
    });
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
    const { id } = req.params;
    const response = await prisma.reconfirmacao.findFirst({
      include: {
        usuario: true,
        estudante: true,
        semestre: true,
        frequencia: true,
        anoLectivo: true,
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
const getReconfirmacaoAtualizacao = async (req, res) => {
  try {
    const { ano, frequencia, semestre, bi } = req.body;
    const response = await prisma.reconfirmacao.findFirst({
      include: {
        usuario: true,
        estudante: true,
        semestre: true,
        frequencia: true,
        anoLectivo: true,
      },
      where: {
        AND: {
          anoLectivo: {
            ano,
          },
          frequencia: {
            ano: frequencia,
          },
          semestre: {
            nome: semestre,
          },
          estudante: {
            bi,
          },
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
    const { fk_frequencia, fk_semestre, fk_ano, idEstudante } = req.body;
    if (!fk_frequencia || !fk_semestre || !fk_ano)
      return res.json({ message: "error" });
    const response = await prisma.reconfirmacao.update({
      include: {
        frequencia: true,
        semestre: true,
        anoLectivo: true,
        estudante: true,
      },
      data: {
        fk_frequencia,
        fk_semestre,
        fk_ano,
      },
      where: {
        id,
      },
    });
    await prisma.estudante.update({
      data: {
        fk_frequencia,
      },
      where: {
        id: idEstudante,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response?.rupe?.toString();
    }
    res.json({ message: "sucess", response: response });
  } catch (error) {
    res.json({ messageError: error.message, message: "error" });
  }
};

const listaReconfirmacao = async (req, res) => {
  const { ano, frequencia, curso, semestre } = req.body;
  try {
    const response = await prisma.reconfirmacao.findMany({
      include: {
        estudante: {
          include: {
            curso: true,
          },
        },

        frequencia: true,
        anoLectivo: true,
        semestre: true,
      },

      where: {
        estudante: {
          curso: {
            curso,
          },
        },
        frequencia: {
          ano: frequencia,
        },
        anoLectivo: {
          ano,
        },
        semestre: {
          nome: semestre,
        },
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const movimentoPropina = async (req, res) => {
  const { dataFinal, dataInicial, ano } = req.body;
  const dataI = new Date(dataInicial);
  const dataF = new Date(dataFinal);

  const jaExiste = await prisma.reconfirmacao.findMany({
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
      anoLectivo: {
        ano,
      },
    },
  });
  const intervalo = await prisma.reconfirmacao.findMany({
    include: {
      estudante: true,
    },
    where: {
      dataSolicitacao: {
        gte: dataI,
        lte: dataF,
      },
      anoLectivo: {
        ano,
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

module.exports = {
  createReconfirmacao,
  getReconfirmacoes,
  getReconfirmacao,
  deleteReconfirmacao,
  upDateReconfirmacao,
  getReconfirmacaoRelatorio,
  getReconfirmacaoEspecifico,
  getReconfirmacaoAtualizacao,
  movimentoPropina,
  listaReconfirmacao,
};
