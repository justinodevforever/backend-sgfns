const { PrismaClient } = require("@prisma/client");
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
    dataSolicitacao,
    fk_user,
  } = req.body;
  console.log(fk_frequencia);
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
      !rupe ||
      !dataSolicitacao
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
        dataSolicitacao,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    res.status(201).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getRecursoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.recurso.findFirst({
      include: {
        AnoFrequncia: true,
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
        AnoFrequncia: true,
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
        AnoFrequncia: true,
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
  } catch (error) {}
};

const upDateRecurso = async (req, res) => {
  const {
    valor,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_frequencia,
    fk_ano,
    rupe,
    fk_user,
  } = req.body;
  try {
    const { id } = req.params;

    if (
      !rupe ||
      !fk_disciplina ||
      !fk_frequencia ||
      !valor ||
      !fk_ano ||
      !fk_semestre ||
      !fk_user
    ) {
      res.status(200).json({ message: "sucess" });
    } else {
      res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    console.log(frequencia, bi);
    console.log(ano, disciplina);
    console.log(curso, semestre);
    return res.json({ message: "error" });
  }
  try {
    const response = await prisma.recurso.findFirst({
      include: {
        disciplina: true,
        estudante: true,
        AnoFrequncia: true,
        semestre: true,
        anoLectivo: true,
        Curso: true,
        usuario: true,
      },
      where: {
        estudante: {
          bi,
        },
        AnoFrequncia: {
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

module.exports = {
  createRecurso,
  getRecurso,
  getRecursos,
  deleteRecursos,
  upDateRecurso,
  getRecursoEspecifico,
  buscarCadeira,
};
