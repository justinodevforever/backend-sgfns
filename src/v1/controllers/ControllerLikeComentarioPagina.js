const createLikeComentarioPagina = async (req, res) => {
  const { like, fk_comentario, fk_user } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPaginas = async (req, res) => {
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPagina = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPaginaEspecific = async (req, res) => {
  const { fk_user, fk_comentario } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikeComentarioPaginaEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDateLikeComentarioPagina = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikeComentarioPagina = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikeComentarioPagina = async (req, res) => {
  const { fk_comentario, like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createLikeComentarioPagina,
  getLikeComentarioPagina,
  getLikeComentarioPaginaEspecific,
  getLikeComentarioPaginas,
  upDateLikeComentarioPagina,
  deleteLikeComentarioPagina,
  CountLikeComentarioPagina,
  getLikeComentarioPaginaEspecificUser,
};
