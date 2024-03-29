const createCadeiraAtraso = async (req, res) => {
  const {
    valor,
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
      fk_ano !== 0 ||
      fk_semestre !== 0
    ) {
    } else {
      res.status(400).json({ message: "error" });
    }
  } catch (error) {
    console.log(error);
  }
};
const getCadeiraAtrazoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
  } catch (error) {}
};

const getCadeiraAtraso = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {}
};
const getCadeiraAtrasos = async (req, res) => {
  try {
  } catch (error) {}
};
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    return res.json({ message: "error" });
  }
  try {
  } catch (error) {}
};
const deleteCadeiraAtrasos = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {}
};

const upDateCadeiraAtraso = async (req, res) => {
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
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      fk_semestre !== 0 ||
      !rupe ||
      !id
    ) {
      res.json({ message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    res.status(201).json({ message: "error" });
  }
};

module.exports = {
  createCadeiraAtraso,
  getCadeiraAtraso,
  getCadeiraAtrasos,
  deleteCadeiraAtrasos,
  upDateCadeiraAtraso,
  getCadeiraAtrazoEspecifico,
  buscarCadeira,
};
