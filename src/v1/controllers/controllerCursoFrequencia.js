const AnoFrequencia = require("../models/anoFrequencia");
const CursoFrequencia = require("../models/cursoFrequencia");
const Cursos = require("../models/cursos");
const Disciplina = require("../models/disciplina");

const createCursoFrequencia = async (req, res) => {
  try {
    const { fk_ano, fk_curso } = req.body;

    const response = await CursoFrequencia.create({
      fk_ano,
      fk_curso,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getCursoFrequencias = async (req, res) => {
  try {
    const response = await CursoFrequencia.findAll({
      include: [{ model: AnoFrequencia }, { model: Cursos }],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getCursoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await CursoFrequencia.findOne({
      include: [{ model: AnoFrequencia }, { model: Cursos }],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const CursoFrequenciaEspecifico = async (req, res) => {
  try {
    const { fk_curso } = req.body;

    const response = await CursoFrequencia.findAll({
      include: [
        {
          model: AnoFrequencia,
          include: {
            model: Disciplina,
          },
        },
        { model: Cursos },
      ],
      where: {
        fk_curso,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteCursoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;

    await CursoFrequencia.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateCursoFrequencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_ano, fk_curso } = req.body;

    const resp = await CursoFrequencia.findByPk(id);

    resp.fk_curso = fk_curso;
    resp.fk_ano = fk_ano;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCursoFrequencia,
  getCursoFrequencia,
  getCursoFrequencia,
  deleteCursoFrequencia,
  upDateCursoFrequencia,
  getCursoFrequencias,
  CursoFrequenciaEspecifico,
};
