const AnoFrequencia = require("../models/anoFrequencia");
const AnoLetivo = require("../models/anoLetivo");
const Cursos = require("../models/cursos");
const Disciplina = require("../models/disciplina");
const Estudante = require("../models/estudante");
const Recurso = require("../models/recurso");
const Semestre = require("../models/semestre");

const createRecurso = async (req, res) => {
  const {
    valor,
    rupe,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_frequencia,
    fk_ano,
  } = req.body;

  try {
    if (
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_semestre !== 0 ||
      fk_ano !== 0 ||
      rupe !== 0
    ) {
      const response = await Recurso.create({
        valor,
        fk_curso,
        fk_disciplina,
        fk_estudante,
        fk_frequencia,
        fk_semestre,
        fk_ano,
        data: Date.now(),
        rupe,
      });
      res.status(201).json({ response: response, message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getRecursoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await Recurso.findOne({
      include: [
        { model: Estudante },
        { model: AnoFrequencia },
        { model: Semestre },
        { model: Disciplina },
        { model: Cursos },
        { model: AnoLetivo },
      ],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {}
};
const getRecurso = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Recurso.findOne({
      include: [
        { model: Estudante },
        { model: AnoFrequencia },
        { model: Semestre },
        { model: Disciplina },
        { model: Cursos },
        { model: AnoLetivo },
      ],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {}
};
const getRecursos = async (req, res) => {
  try {
    const response = await Recurso.findAll({
      include: [
        { model: Estudante },
        { model: AnoFrequencia },
        { model: Semestre },
        { model: Disciplina },
        { model: Cursos },
        { model: AnoLetivo },
      ],
    });

    res.status(200).json(response);
  } catch (error) {}
};
const deleteRecursos = async (req, res) => {
  try {
    const { id } = req.params;

    await Recurso.destroy({
      where: {
        id,
      },
    });
  } catch (error) {}
};

const upDateRecurso = async (req, res) => {
  const {
    valor,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_frequencia,
    fk_ano,
    rupe,
  } = req.body;
  try {
    const { id } = req.params;

    if (
      rupe !== 0 ||
      fk_disciplina !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      fk_semestre !== 0
    ) {
      const response = await Recurso.findByPk(id);

      response.fk_disciplina = fk_disciplina;
      response.fk_frequencia = fk_frequencia;
      response.fk_semestre = fk_semestre;
      response.fk_ano = fk_ano;
      response.rupe = rupe;

      response.save();
      res.status(200).json({ message: "sucess" });
    } else {
      res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    return res.json({ message: "error" });
  }
  try {
    const response = await Recurso.findOne({
      include: [
        { model: Estudante, where: { bi } },
        { model: AnoFrequencia, where: { ano: frequencia } },
        { model: Semestre, where: { nome: semestre } },
        { model: Disciplina, where: { nome: disciplina } },
        { model: Cursos, where: { curso } },
        { model: AnoLetivo, where: { ano } },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    return res.json({ message: "error" });
  }
};

module.exports = {
  createRecurso,
  getRecurso,
  getRecursos,
  deleteRecursos,
  upDateRecurso,
  getRecursoEspecifico,
  buscarCadeira,
};
