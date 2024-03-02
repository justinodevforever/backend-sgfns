const { Op } = require("sequelize");
const LikePagina = require("../models/LikePagina");

const createLikePagina = async (req, res) => {
  const { like, fk_user } = req.body;

  try {
    await LikePagina.create({
      like,
      fk_user,
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePaginas = async (req, res) => {
  try {
    const response = await LikePagina.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePagina = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await LikePagina.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikePaginaEspecific = async (req, res) => {
  const { fk_user, fk_pagina } = req.body;

  try {
    const response = await LikePagina.findAll({
      order: [["id", "DESC"]],
      where: {
        [Op.and]: [
          {
            fk_user,
          },
          {
            like: true,
          },
        ],
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const getLikePaginaEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
    const response = await LikePagina.findAll({
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

const upDateLikePagina = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const response = await LikePagina.findByPk(id);

    response.like = like;

    response.save();
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const deleteLikePagina = async (req, res) => {
  const { id } = req.params;
  try {
    await LikePagina.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountLikePagina = async (req, res) => {
  const { fk_pagina, like } = req.body;

  try {
    const response = await LikePagina.findAndCountAll({
      where: {
        [Op.and]: [
          {
            like: true,
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
  createLikePagina,
  getLikePaginas,
  getLikePaginaEspecific,
  getLikePagina,
  upDateLikePagina,
  deleteLikePagina,
  CountLikePagina,
  getLikePaginaEspecificUser,
};
