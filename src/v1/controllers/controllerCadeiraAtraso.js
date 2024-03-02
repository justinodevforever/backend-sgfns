const AnoFrequencia = require("../models/anoFrequencia");
const Cursos = require("../models/cursos");
const Disciplina = require("../models/disciplina");
const Estudante = require("../models/estudante");
const CadeiraAtraso = require("../models/cadeiraAtraso");
const Semestre = require("../models/semestre");
const AnoLetivo = require("../models/anoLetivo");

const createCadeiraAtraso = async (req, res) => {
  const {
    valor,
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
      fk_ano !== 0 ||
      fk_semestre !== 0
    ) {
      const response = await CadeiraAtraso.create({
        valor,
        fk_curso,
        fk_disciplina,
        fk_estudante,
        fk_frequencia,
        fk_semestre,
        fk_ano,
        data: Date.now(),
      });
      res.status(201).json({ response: response, message: "sucess" });
    } else {
      res.status(400).json({ message: "error" });
    }
  } catch (error) {
    console.log(error);
  }
};
const getCadeiraAtrazoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await CadeiraAtraso.findOne({
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

const getCadeiraAtraso = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await CadeiraAtraso.findOne({
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
const getCadeiraAtrasos = async (req, res) => {
  try {
    const response = await CadeiraAtraso.findAll({
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
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    return res.json({ message: "error" });
  }
  try {
    const response = await CadeiraAtraso.findOne({
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
  } catch (error) {}
};
const deleteCadeiraAtrasos = async (req, res) => {
  try {
    const { id } = req.params;

    await CadeiraAtraso.destroy({
      where: {
        id,
      },
    });
  } catch (error) {}
};

const upDateCadeiraAtraso = async (req, res) => {
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
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      fk_semestre !== 0 ||
      !rupe ||
      !id
    ) {
      const response = await CadeiraAtraso.findByPk(id);
      response.fk_disciplina = fk_disciplina;
      response.fk_frequencia = fk_frequencia;
      response.fk_semestre = fk_semestre;
      response.fk_ano = fk_ano;
      response.rupe = rupe;

      response.save();
      res.json({ message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    res.status(201).json({ message: "error" });
  }
};

module.exports = {
  createCadeiraAtraso,
  getCadeiraAtraso,
  getCadeiraAtrasos,
  deleteCadeiraAtrasos,
  upDateCadeiraAtraso,
  getCadeiraAtrazoEspecifico,
  buscarCadeira,
};
