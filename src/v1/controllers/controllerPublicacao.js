const createPublicacao = async (req, res) => {
  try {
    const { publicacao, fk_user } = req.body;
    if (publicacao != undefined || publicacao != "") {
    }
  } catch (error) {
    console.log(error.mensagens);
  }
};

const getPublicacoes = async (req, res) => {
  const { page = 1 } = req.query;

  const limit = 10;
  let lastPage = 1;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const getPublicacaoPerfil = async (req, res) => {
  const { fk_user } = req.body;
  const { page = 1 } = req.query;

  const limit = 10;
  let lastPage = 1;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDatePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    const { publicacao, fk_user } = req.body;
  } catch (error) {
    res.status(201).json(error);
  }
};

const getPublicacao = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const deletePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createPublicacao,
  getPublicacao,
  getPublicacoes,
  upDatePublicacao,
  deletePublicacao,
  getPublicacaoPerfil,
};
