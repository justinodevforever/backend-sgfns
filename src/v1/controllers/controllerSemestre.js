const createSemestre = async (req, res) => {
  try {
    const { nome, numero } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const getSemestres = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const SemestresEspecifico = async (req, res) => {
  const { fk_curso, fk_ano } = req.body;
  try {
  } catch (error) {
    res.json(error);
  }
};
const getSemestre = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const buscaSemestre = async (req, res) => {
  try {
    const { nome } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const deleteSemestre = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateSemestre = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, numero } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createSemestre,
  getSemestre,
  getSemestres,
  deleteSemestre,
  upDateSemestre,
  buscaSemestre,
};
