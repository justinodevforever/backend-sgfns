const { Op } = require("sequelize");
const likeComentarioPagina = require("../models/likeComentarioPagina");
const comentariosPagina = require("../models/comentarioPagina");

const createLikeComentarioPagina = async (req, res) => {
  const { like, fk_comentario, fk_user } = req.body;

  try {
    await likeComentarioPagina.create({
      like,
      fk_comentario,
      fk_user,
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPaginas = async (req, res) => {
  try {
    const response = await likeComentarioPagina.findAll({
      include: {
        model: comentariosPagina,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPagina = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await likeComentarioPagina.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPaginaEspecific = async (req, res) => {
  const { fk_user, fk_comentario } = req.body;

  try {
    const response = await likeComentarioPagina.findAll({
      include: {
        model: comentariosPagina,
      },
      order: [["id", "DESC"]],
      where: {
        [Op.and]: [
          {
            fk_user,
          },
          {
            like: true,
          },
          {
            fk_comentario,
          },
        ],
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikeComentarioPaginaEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
    const response = await likeComentarioPagina.findAll({
      include: {
        model: comentariosPagina,
      },
      order: [["id", "DESC"]],
      where: {
        [Op.and]: [
          {
            like: cliclike,
          },
          {
            fk_user,
          },
        ],
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDateLikeComentarioPagina = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const response = await likeComentarioPagina.findByPk(id);

    response.like = like;

    response.save();
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikeComentarioPagina = async (req, res) => {
  const { id } = req.params;
  try {
    await likeComentarioPagina.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikeComentarioPagina = async (req, res) => {
  const { fk_comentario, like } = req.body;

  try {
    const response = await likeComentarioPagina.findAndCountAll({
      include: {
        model: comentariosPagina,
      },
      where: {
        [Op.and]: [
          {
            like: true,
          },
          {
            fk_comentario,
          },
        ],
      },
    });
    res.status(200).json(response);
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
