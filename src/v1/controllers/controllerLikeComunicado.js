const { Op } = require("sequelize");
const likeComunicado = require("../models/LikeComunicado");

const createlikeComunicado = async (req, res) => {
  const { like, fk_user } = req.body;

  try {
    await likeComunicado.create({
      like,
      fk_user,
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComunicados = async (req, res) => {
  try {
    const response = await likeComunicado.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComunicado = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await likeComunicado.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getlikeComunicadoEspecific = async (req, res) => {
  const { fk_user } = req.body;

  try {
    const response = await likeComunicado.findAll({
      order: [["id", "ASC"]],
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
const getlikeComunicadoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
    const response = await likeComunicado.findAll({
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

const upDatelikeComunicado = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const response = await likeComunicado.findByPk(id);

    response.like = like;

    response.save();
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const deletelikeComunicado = async (req, res) => {
  const { id } = req.params;
  try {
    await likeComunicado.destroy({
      where: { id },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountlikeComunicado = async (req, res) => {
  const { like } = req.body;

  try {
    const response = await likeComunicado.findAndCountAll({
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
  createlikeComunicado,
  getLikeComunicado,
  getlikeComunicadoEspecific,
  getLikeComunicados,
  upDatelikeComunicado,
  deletelikeComunicado,
  CountlikeComunicado,
  getlikeComunicadoEspecificUser,
};
