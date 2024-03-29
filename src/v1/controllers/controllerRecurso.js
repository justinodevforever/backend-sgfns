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
  } = req.body;

  try {
    if (
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_semestre !== 0 ||
      fk_ano !== 0 ||
      rupe !== 0
    ) {
      res.status(201).json({ message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getRecursoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
  } catch (error) {}
};
const getRecurso = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {}
};
const getRecursos = async (req, res) => {
  try {
  } catch (error) {}
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
  } = req.body;
  try {
    const { id } = req.params;

    if (
      rupe !== 0 ||
      fk_disciplina !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      fk_semestre !== 0
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
    return res.json({ message: "error" });
  }
  try {
  } catch (error) {
    return res.json({ message: "error" });
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
