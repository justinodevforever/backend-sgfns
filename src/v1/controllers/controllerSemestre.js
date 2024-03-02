const { Op } = require("sequelize");
const Semestre = require("../models/semestre");

const createSemestre = async (req, res) => {
  try {
    const { nome, numero } = req.body;

    const response = await Semestre.create({
      nome,
      numero,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getSemestres = async (req, res) => {
  try {
    const response = await Semestre.findAll({
      order: [["id", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const SemestresEspecifico = async (req, res) => {
  const { fk_curso, fk_ano } = req.body;
  try {
    const response = await Semestre.findAll({
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
const getSemestre = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Semestre.findOne({
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const buscaSemestre = async (req, res) => {
  try {
    const { nome } = req.body;

    const response = await Semestre.findOne({
      where: {
        nome,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteSemestre = async (req, res) => {
  try {
    const { id } = req.params;

    await Semestre.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateSemestre = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, numero } = req.body;

    const resp = await Semestre.findByPk(id);

    resp.nome = nome;
    resp.numero = numero;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createSemestre,
  getSemestre,
  getSemestres,
  deleteSemestre,
  upDateSemestre,
  buscaSemestre,
};
