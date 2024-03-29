const createReconfirmacao = async (req, res) => {
  try {
    const {
      valor,
      rupe,
      fk_semestre,
      fk_estudante,
      fk_curso,
      fk_user,
      fk_ano,
      fk_frequencia,
    } = req.body;
    if (
      valor === 0 ||
      rupe === 0 ||
      valor === undefined ||
      fk_ano === 0 ||
      fk_ano === undefined ||
      fk_curso === 0 ||
      fk_curso === undefined ||
      fk_estudante === 0 ||
      fk_estudante === undefined ||
      fk_semestre === 0 ||
      fk_semestre === undefined ||
      fk_user === 0 ||
      fk_user === undefined ||
      fk_frequencia === null ||
      fk_frequencia === undefined
    ) {
      res.status(201).json({ message: "error" });
      return;
    }

    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json(error);
  }
};

const getReconfirmacoes = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getReconfirmacaoRelatorio = async (req, res) => {
  try {
    const { ano, semestre, bi } = req.body;
  } catch (error) {
    res.json(error);
  }
};
const getReconfirmacaoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
  } catch (error) {
    res.json(error);
  }
};
const getReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};

const deleteReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      valor,
      rupe,
      fk_curso,
      fk_estudante,
      fk_user,
      fk_ano,
      fk_anoFrequencia,
      ano,
    } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createReconfirmacao,
  getReconfirmacoes,
  getReconfirmacao,
  deleteReconfirmacao,
  upDateReconfirmacao,
  getReconfirmacaoRelatorio,
  getReconfirmacaoEspecifico,
};
