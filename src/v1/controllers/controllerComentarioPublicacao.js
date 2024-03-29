const getComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
};
const createComentarioPublicacao = async (req, res) => {
  const { comentario, fk_user, fk_publicacao } = req.body;
};

const getComentariosPublicacoes = async (req, res) => {};

const deleteComentarioPublicacao = async (req, res) => {
  res.status(200).json({ user: "Removido Com sucesso" });
};

const upDatecomentarioPublicacao = async (req, res) => {
  const { id } = req.params;

  const { comentario } = req.body;

  try {
    res.status(200).json({ mensage: "sucess" });
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getComentSpecific = async (req, res) => {
  const { fk_publicacao } = req.body;
  const { page = 1 } = req.query;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const count = async (req, res) => {
  const { fk_publicacao } = req.body;

  try {
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createComentarioPublicacao,
  getComentariosPublicacoes,
  getComentarioPublicacao,
  deleteComentarioPublicacao,
  upDatecomentarioPublicacao,
  getComentSpecific,
  count,
};
