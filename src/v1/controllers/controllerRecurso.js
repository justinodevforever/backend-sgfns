const { PrismaClient } = require("@prisma/client");
const { format } = require("date-fns");
const prisma = new PrismaClient();
const createRecurso = async (req, res) => {
  const {
    valor,
    rupe,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_frequencia,
    fk_ano,
    fk_user,
  } = req.body;

  try {
    if (
      !valor ||
      !fk_curso ||
      !fk_user ||
      !fk_disciplina ||
      !fk_estudante ||
      !fk_frequencia ||
      !fk_semestre ||
      !fk_ano ||
      !rupe
    )
      return res.status(201).json({ message: "errore" });
    const response = await prisma.recurso.create({
      data: {
        rupe,
        valor,
        fk_ano,
        fk_curso,
        fk_disciplina,
        fk_estudante,
        fk_frquencia: fk_frequencia,
        fk_semestre,
        fk_user,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.status(201).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getRecursoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.recurso.findFirst({
      include: {
        AnoFrequencia: true,
        anoLectivo: true,
        Curso: true,
        disciplina: true,
        estudante: true,
        semestre: true,
        usuario: true,
      },
      where: {
        id,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getRecurso = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.recurso.findFirst({
      include: {
        AnoFrequencia: true,
        anoLectivo: true,
        Curso: true,
        disciplina: true,
        estudante: true,
        semestre: true,
        usuario: true,
      },
      where: {
        id,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getRecursos = async (req, res) => {
  try {
    const response = await prisma.recurso.findMany({
      include: {
        AnoFrequencia: true,
        anoLectivo: true,
        Curso: true,
        disciplina: true,
        estudante: true,
        semestre: true,
        usuario: true,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "sucess" });
  }
};
const deleteRecursos = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.recurso.delete({ where: { id } });
  } catch (error) {}
};

const upDateRecurso = async (req, res) => {
  const { fk_semestre, fk_disciplina, fk_frequencia, fk_ano, rupe } = req.body;
  try {
    const { id } = req.params;

    if (!rupe || !fk_disciplina || !fk_frequencia || !fk_ano || !fk_semestre) {
      return res.json({ message: "error" });
    }

    await prisma.recurso.update({
      data: {
        fk_ano,
        fk_disciplina,
        fk_frquencia: fk_frequencia,
        fk_semestre,
      },
      where: {
        id,
      },
    });
    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    return res.json({ message: "error" });
  }
  try {
    const response = await prisma.recurso.findFirst({
      include: {
        disciplina: true,
        estudante: true,
        AnoFrequencia: true,
        semestre: true,
        anoLectivo: true,
        Curso: true,
        usuario: true,
      },
      where: {
        estudante: {
          bi,
        },
        AnoFrequencia: {
          ano: frequencia,
        },
        anoLectivo: {
          ano,
        },
        semestre: {
          nome: semestre,
        },
        Curso: {
          curso,
        },
        disciplina: {
          nome: disciplina,
        },
      },
    });
    if (typeof response?.rupe === "bigint" && response?.rupe) {
      response.rupe = response.rupe.toString();
    }
    res.json(response);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
const movimentoRecurso = async (req, res) => {
  const { dataFinal, dataInicial, ano } = req.body;
  const dataI = new Date(dataInicial);
  const dataF = new Date(dataFinal);

  const jaExiste = await prisma.recurso.findMany({
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
  const intervalo = await prisma.recurso.findMany({
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
  createRecurso,
  getRecurso,
  getRecursos,
  deleteRecursos,
  upDateRecurso,
  getRecursoEspecifico,
  buscarCadeira,
  movimentoRecurso,
};
