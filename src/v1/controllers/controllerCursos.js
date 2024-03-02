const AnoFrequencia = require("../models/anoFrequencia");
const CursoFrequencia = require("../models/cursoFrequencia");
const Cursos = require("../models/cursos");

const createCurso = async (req, res) => {
  try {
    const { curso } = req.body;
    if (!curso) {
      res.json({ message: "Error" });
    }

    const response = await Cursos.create({
      curso,
    });
    res.status(201).json(response);
  } catch (error) {
    res.json(error);
  }
};

const getCursos = async (req, res) => {
  try {
    const response = await Cursos.findAll({
      include: [
        {
          model: CursoFrequencia,
          include: {
            model: AnoFrequencia,
          },
        },
      ],
      order: [["curso", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getCurso = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Cursos.findOne({
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getCursoEspecifico = async (req, res) => {
  try {
    const { curso } = req.body;

    const response = await Cursos.findOne({
      where: {
        curso,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteCurso = async (req, res) => {
  try {
    const { id } = req.params;

    await Cursos.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "Sucess" });
  } catch (error) {
    res.json(error);
  }
};
const upDateCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const { curso } = req.body;

    const resp = await Cursos.findByPk(id);

    resp.curso = curso;

    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCurso,
  getCursos,
  getCurso,
  deleteCurso,
  upDateCurso,
  getCursoEspecifico,
};
