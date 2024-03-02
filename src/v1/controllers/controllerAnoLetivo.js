const AnoLetivo = require("../models/anoLetivo");

const createAnoLetivo = async (req, res) => {
  try {
    const { ano } = req.body;

    const response = await AnoLetivo.create({
      ano,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getAnoLetivos = async (req, res) => {
  try {
    const response = await AnoLetivo.findAll();

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await AnoLetivo.findOne({
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const buscaAnoLetivo = async (req, res) => {
  try {
    const { ano } = req.body;

    const response = await AnoLetivo.findOne({
      where: {
        ano,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;

    await AnoLetivo.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateAnoLetivo = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano } = req.body;

    const resp = await AnoLetivo.findByPk(id);

    resp.ano = ano;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createAnoLetivo,
  getAnoLetivo,
  getAnoLetivos,
  deleteAnoLetivo,
  buscaAnoLetivo,
  upDateAnoLetivo,
};
