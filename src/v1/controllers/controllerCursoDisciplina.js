const createCursoDisciplina = async (req, res) => {
  try {
    const { fk_disciplina, fk_curso } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const getCursosDisciplina = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getCursoDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};

const deleteCursoDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateCursoDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_disciplina, fk_curso } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCursoDisciplina,
  getCursoDisciplina,
  getCursosDisciplina,
  deleteCursoDisciplina,
  upDateCursoDisciplina,
};
