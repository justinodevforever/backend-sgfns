const getEstudante = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(401).json({ message: "error" });
  }
};
const buscaEstudantePorBi = async (req, res) => {
  const { bi } = req.body;
  try {
  } catch (error) {
    res.json({ message: "error" });
  }
};
const createEstudante = async (req, res) => {
  const { nome, bi, contato, fk_user, fk_curso, periodo } = req.body;

  try {
    if (!nome || !bi || !contato || !fk_curso || !fk_user || !periodo) {
      res.json({ message: "error" });
      return;
    }

    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.status(401).json({ message: "error" });
  }
};

const getEstudantes = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getEstudanteBi = async (req, res) => {
  try {
    const { bi } = req.body;
  } catch (error) {}
};
const getEstudanteEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
  } catch (error) {}
};
const getAllEstudante = async (req, res) => {
  const { fk_user } = req.body;
  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getEstudantePorUsuario = async (req, res) => {
  const { fk_user } = req.body;
  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deleteEstudante = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({ user: "Removido Com sucesso" });
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const upDateEstudante = async (req, res) => {
  const { id } = req.params;

  const { nome, contato, fk_curso, periodo } = req.body;

  if (!nome || !contato || !fk_curso || !periodo) {
    res.json({ message: "error" });
    return;
  }

  try {
    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchEstudante = async (req, res) => {
  const { nome } = req.body;
  try {
    if (nome !== "") {
    }
  } catch (error) {
    res.json({ mensage: "error" });
  }
};

module.exports = {
  createEstudante,
  getEstudante,
  getEstudantes,
  deleteEstudante,
  upDateEstudante,
  getEstudanteEspecifico,
  getAllEstudante,
  searchEstudante,
  buscaEstudantePorBi,
  getEstudantePorUsuario,
  getEstudanteBi,
};
