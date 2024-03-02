const Mes = require("../models/mes");

const createMes = async (req, res) => {
  try {
    const { mes, algarismo } = req.body;

    const response = await Mes.create({
      mes,
      algarismo,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getMeses = async (req, res) => {
  try {
    const response = await Mes.findAll();

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getMes = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Mes.findOne({
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const buscaMes = async (req, res) => {
  try {
    const { mes } = req.body;

    const response = await Mes.findOne({
      where: {
        mes,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteMes = async (req, res) => {
  try {
    const { id } = req.params;

    await Mes.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateMes = async (req, res) => {
  try {
    const { id } = req.params;
    const { mes, algarismo } = req.body;

    const resp = await Mes.findByPk(id);

    resp.mes = mes;
    resp.algarismo = algarismo;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createMes,
  getMes,
  getMeses,
  deleteMes,
  upDateMes,
  buscaMes,
};
