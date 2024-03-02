const { Op } = require("sequelize");
const LikePublicacao = require("../models/LikePublicacao");
const publicacoes = require("../models/publicacao");

const createLikePublicacao = async (req, res) => {
  const { like, fk_publicacao, fk_user } = req.body;

  try {
    await LikePublicacao.create({
      like,
      fk_publicacao,
      fk_user,
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacoes = async (req, res) => {
  try {
    const response = await LikePublicacao.findAll({
      include: {
        model: publicacoes,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacao = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await LikePublicacao.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePublicacaoEspecific = async (req, res) => {
  const { fk_user, fk_publicacao } = req.body;

  try {
    const response = await LikePublicacao.findAll({
      include: {
        model: publicacoes,
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
            fk_publicacao,
          },
        ],
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikePublicacaoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
    const response = await LikePublicacao.findAll({
      include: {
        model: publicacoes,
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

const upDateLikePublicacao = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const response = await LikePublicacao.findByPk(id);

    response.like = like;

    response.save();
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    await LikePublicacao.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikePublicacao = async (req, res) => {
  const { fk_publicacao, like } = req.body;

  try {
    const response = await LikePublicacao.findAndCountAll({
      include: {
        model: publicacoes,
      },
      where: {
        [Op.and]: [
          {
            like: true,
          },
          {
            fk_publicacao,
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
  createLikePublicacao,
  getLikePublicacao,
  getLikePublicacaoEspecific,
  getLikePublicacoes,
  upDateLikePublicacao,
  deleteLikePublicacao,
  CountLikePublicacao,
  getLikePublicacaoEspecificUser,
};
