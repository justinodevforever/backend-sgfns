const createCurso = async (req, res) => {
  try {
    const { curso } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const getCursos = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getCurso = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const getCursoEspecifico = async (req, res) => {
  try {
    const { curso } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const deleteCurso = async (req, res) => {
  try {
    const { id } = req.params;

    res.json({ message: "Sucess" });
  } catch (error) {
    res.json(error);
  }
};
const upDateCurso = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCurso,
  getCursos,
  getCurso,
  deleteCurso,
  upDateCurso,
  getCursoEspecifico,
};
