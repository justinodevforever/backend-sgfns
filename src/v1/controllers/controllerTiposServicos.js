const TiposServicos = require("../models/tiposServicos");

const createTiposServicos = async (req, res) => {
  try {
    const { tipo, valor } = req.body;

    const response = await TiposServicos.create({
      tipo,
      valor,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getTiposServicoss = async (req, res) => {
  try {
    const response = await TiposServicos.findAll({
      order: [["tipo", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getTiposServicos = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await TiposServicos.findOne({
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getTiposServicosEspecifico = async (req, res) => {
  try {
    const { tipo } = req.body;

    const response = await TiposServicos.findOne({
      where: {
        tipo,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteTiposServicos = async (req, res) => {
  try {
    const { id } = req.params;

    await TiposServicos.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateTiposServicos = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo } = req.body;

    const resp = await TiposServicos.findByPk(id);

    resp.tipo = tipo;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createTiposServicos,
  getTiposServicos,
  getTiposServicoss,
  deleteTiposServicos,
  upDateTiposServicos,
  getTiposServicosEspecifico,
};
