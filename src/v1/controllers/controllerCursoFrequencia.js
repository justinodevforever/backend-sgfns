const createCursoFrequencia = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};

const getCursoFrequencias = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getCursoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const CursoFrequenciaEspecifico = async (req, res) => {
  try {
    const { fk_curso } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const deleteCursoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;

    await CursoFrequencia.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateCursoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_ano, fk_curso } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCursoFrequencia,
  getCursoFrequencia,
  getCursoFrequencia,
  deleteCursoFrequencia,
  upDateCursoFrequencia,
  getCursoFrequencias,
  CursoFrequenciaEspecifico,
};
