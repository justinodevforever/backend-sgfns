const { Op } = require("sequelize");
const AnoFrequencia = require("../models/anoFrequencia");
const Disciplina = require("../models/disciplina");

const createAnoFrequencia = async (req, res) => {
  try {
    const { ano, semestre } = req.body;

    const response = await AnoFrequencia.create({
      ano,
      semestre,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getAnoFrequencias = async (req, res) => {
  try {
    const response = await AnoFrequencia.findAll({
      include: {
        model: Disciplina,
      },
      order: [["id", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const anoFrequenciasEspecifico = async (req, res) => {
  const { fk_curso, fk_ano } = req.body;
  try {
    const response = await AnoFrequencia.findAll({
      include: {
        model: Disciplina,
        where: {
          [Op.and]: {
            fk_curso,
            fk_ano,
          },
        },
      },
      order: [["id", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const anoFrequenciasPorAno = async (req, res) => {
  const { fk_curso, ano } = req.body;
  try {
    const response = await AnoFrequencia.findAll({
      include: {
        model: Disciplina,
        where: {
          [Op.and]: {
            fk_curso,
            ano,
          },
        },
      },
      order: [["id", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const searchFrequencia = async (req, res) => {
  try {
    const { frequencia } = req.body;

    const response = await AnoFrequencia.findOne({
      where: {
        ano: frequencia,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await AnoFrequencia.findOne({
      include: {
        model: Disciplina,
      },
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;

    await AnoFrequencia.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateAnoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano, semestre } = req.body;

    const resp = await AnoFrequencia.findByPk(id);

    resp.ano = ano;
    resp.semestre = semestre;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createAnoFrequencia,
  getAnoFrequencia,
  getAnoFrequencias,
  deleteAnoFrequencia,
  upDateAnoFrequencia,
  anoFrequenciasPorAno,
  searchFrequencia,
};
