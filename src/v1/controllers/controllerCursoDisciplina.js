const CursosDisciplina = require("../models/cursoDisciplina");
const Cursos = require("../models/cursos");
const Disciplina = require("../models/disciplina");
const Professor = require("../models/professor");

const createCursoDisciplina = async (req, res) => {
  try {
    const { fk_disciplina, fk_curso } = req.body;

    const response = await CursosDisciplina.create({
      fk_disciplina,
      fk_curso,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getCursosDisciplina = async (req, res) => {
  try {
    const response = await CursosDisciplina.findAll({
      include: [{ model: Disciplina }, { model: Cursos }],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getCursoDisciplina = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await CursosDisciplina.findOne({
      include: [{ model: Disciplina }, { model: Cursos }],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteCursoDisciplina = async (req, res) => {
  try {
    const { id } = req.params;

    await CursosDisciplina.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateCursoDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_disciplina, fk_curso } = req.body;

    const resp = await CursosDisciplina.findByPk(id);

    resp.fk_curso = fk_curso;
    resp.fk_disciplina = fk_disciplina;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCursoDisciplina,
  getCursoDisciplina,
  getCursosDisciplina,
  deleteCursoDisciplina,
  upDateCursoDisciplina,
};
