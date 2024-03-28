const AnoFrequencia = require("../models/anoFrequencia");
const AnoLetivo = require("../models/anoLetivo");
const Cursos = require("../models/cursos");
const Disciplina = require("../models/disciplina");
const Professor = require("../models/professor");
const Semestre = require("../models/semestre");

const createDisciplina = async (req, res) => {
  try {
    const { nome, fk_ano, fk_curso, fk_semestre } = req.body;
    if (!nome || !fk_curso || !fk_semestre || !fk_ano) {
      return res.json({ message: "error" });
    }

    const response = await Disciplina.create({
      nome,
      fk_ano,
      fk_curso,
      fk_semestre,
    });
    res.status(201).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getDisciplinas = async (req, res) => {
  try {
    const response = await Disciplina.findAll({
      include: [
        {
          model: Semestre,
        },
        { model: Cursos },

        { model: AnoFrequencia },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const DisciplinasPorAnoCurso = async (req, res) => {
  try {
    const { ano, curso, semestre } = req.body;
    if (!ano || !curso || !semestre) {
      return res.json({ message: "error" });
    }
    const response = await Disciplina.findAll({
      include: [
        {
          model: Semestre,
          where: {
            nome: semestre,
          },
        },
        {
          model: Cursos,
          where: {
            curso,
          },
        },

        {
          model: AnoFrequencia,
          where: {
            ano,
          },
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const DisciplinasEspecifico = async (req, res) => {
  try {
    const { fk_ano } = req.body;
    if (!fk_ano) {
      return res.json({ message: "error" });
    }
    const response = await Disciplina.findAll({
      include: [
        {
          model: Semestre,
        },
        { model: Cursos },

        { model: AnoFrequencia },
      ],
      where: {
        fk_ano,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchDisciplina = async (req, res) => {
  try {
    const { nome } = req.body;
    if (!nome) {
      return res.json({ message: "error" });
    }
    const response = await Disciplina.findOne({
      include: [
        {
          model: Semestre,
        },
        { model: Cursos },

        { model: AnoFrequencia },
      ],
      where: {
        nome,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ message: "error" });
    }
    const response = await Disciplina.findOne({
      include: [
        { model: Cursos },
        { model: AnoFrequencia },
        { model: Semestre },
      ],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const deleteDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ message: "error" });
    }

    await Disciplina.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const upDateDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, fk_ano, fk_curso, fk_semestre } = req.body;
    if (!nome || !fk_curso || !fk_semestre || !fk_ano || !id) {
      return res.json({ message: "error" });
    }

    const resp = await Disciplina.findByPk(id);

    resp.fk_curso = fk_curso;
    resp.fk_ano = fk_ano;
    resp.nome = nome;
    resp.fk_semestre = fk_semestre;
    resp.save();
    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

module.exports = {
  createDisciplina,
  getDisciplinas,
  getDisciplina,
  deleteDisciplina,
  upDateDisciplina,
  DisciplinasEspecifico,
  DisciplinasPorAnoCurso,
  searchDisciplina,
};
