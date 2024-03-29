const createLikePublicacao = async (req, res) => {
  const { like, fk_publicacao, fk_user } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacoes = async (req, res) => {
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacao = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacaoEspecific = async (req, res) => {
  const { fk_user, fk_publicacao } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikePublicacaoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDateLikePublicacao = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikePublicacao = async (req, res) => {
  const { fk_publicacao, like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createLikePublicacao,
  getLikePublicacao,
  getLikePublicacaoEspecific,
  getLikePublicacoes,
  upDateLikePublicacao,
  deleteLikePublicacao,
  CountLikePublicacao,
  getLikePublicacaoEspecificUser,
};
