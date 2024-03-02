const { Op } = require("sequelize");
const likeComentarioPublicacao = require("../models/likeComentarioPublicacao");
const comentariosPublicacao = require("../models/comentarioPublicacao");

const createLikeComentarioPublicacao = async (req, res) => {
  const { like, fk_comentario, fk_user } = req.body;

  try {
    await likeComentarioPublicacao.create({
      like,
      fk_comentario,
      fk_user,
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPublicacoes = async (req, res) => {
  try {
    const response = await likeComentarioPublicacao.findAll({
      include: {
        model: comentariosPublicacao,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await likeComentarioPublicacao.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComentarioPublicacaoEspecific = async (req, res) => {
  const { fk_user, fk_comentario } = req.body;

  try {
    const response = await likeComentarioPublicacao.findAll({
      include: {
        model: comentariosPublicacao,
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
const getLikeComentarioPublicacaoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
    const response = await likeComentarioPublicacao.findAll({
      include: {
        model: comentariosPublicacao,
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

const upDateLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const response = await likeComentarioPublicacao.findByPk(id);

    response.like = like;

    response.save();
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikeComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    await likeComentarioPublicacao.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikeComentarioPublicacao = async (req, res) => {
  const { fk_comentario, like } = req.body;

  try {
    const response = await likeComentarioPublicacao.findAndCountAll({
      include: {
        model: comentariosPublicacao,
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
  createLikeComentarioPublicacao,
  getLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecific,
  getLikeComentarioPublicacoes,
  upDateLikeComentarioPublicacao,
  deleteLikeComentarioPublicacao,
  CountLikeComentarioPublicacao,
  getLikeComentarioPublicacaoEspecificUser,
};
