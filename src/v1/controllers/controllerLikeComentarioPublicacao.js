const createLikeComentarioPublicacao = async (req, res) => {
  const { like, fk_comentario, fk_user } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPublicacoes = async (req, res) => {
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPublicacaoEspecific = async (req, res) => {
  const { fk_user, fk_comentario } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikeComentarioPublicacaoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDateLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikeComentarioPublicacao = async (req, res) => {
  const { fk_comentario, like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createLikeComentarioPublicacao,
  getLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecific,
  getLikeComentarioPublicacoes,
  upDateLikeComentarioPublicacao,
  deleteLikeComentarioPublicacao,
  CountLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecificUser,
};
