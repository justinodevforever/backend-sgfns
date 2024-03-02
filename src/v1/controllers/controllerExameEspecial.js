const ExameEspecial = require("../models/ExameEspecial");
const AnoFrequencia = require("../models/anoFrequencia");
const AnoLetivo = require("../models/anoLetivo");
const Cursos = require("../models/cursos");
const Disciplina = require("../models/disciplina");
const Estudante = require("../models/estudante");
const Semestre = require("../models/semestre");

const createExameEspecial = async (req, res) => {
  const {
    valor,
    rupe,
    fk_estudante,
    fk_semestre,
    fk_curso,
    fk_disciplina,
    fk_ano,
    fk_frequencia,
  } = req.body;

  try {
    if (
      valor !== 0 ||
      fk_curso !== 0 ||
      fk_disciplina !== 0 ||
      fk_estudante !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      rupe !== 0 ||
      fk_semestre !== 0
    ) {
      const response = await ExameEspecial.create({
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
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getExameEspecialEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await ExameEspecial.findOne({
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

const getExameEspecial = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await ExameEspecial.findOne({
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
const getExameEspecials = async (req, res) => {
  try {
    const response = await ExameEspecial.findAll({
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
const deleteExameEspecials = async (req, res) => {
  try {
    const { id } = req.params;

    await ExameEspecial.destroy({
      where: {
        id,
      },
    });
  } catch (error) {}
};

const upDateExameEspecial = async (req, res) => {
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
      fk_disciplina !== 0 ||
      fk_frequencia !== 0 ||
      fk_ano !== 0 ||
      fk_semestre !== 0 ||
      rupe !== 0
    ) {
      const response = await ExameEspecial.findByPk(id);

      response.fk_disciplina = fk_disciplina;
      response.fk_frequencia = fk_frequencia;
      response.fk_semestre = fk_semestre;
      response.fk_ano = fk_ano;
      response.rupe = rupe;

      response.save();
      res.status(201).json({ message: "sucess" });
    } else {
      res.status(201).json({ message: "error" });
    }
  } catch (error) {
    res.status(201).json({ message: "error" });
  }
};
const buscarCadeira = async (req, res) => {
  const { bi, frequencia, ano, semestre, disciplina, curso } = req.body;

  if (!bi || !frequencia || !ano || !semestre || !disciplina || !curso) {
    return res.json({ message: "error" });
  }
  try {
    const response = await ExameEspecial.findOne({
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

module.exports = {
  createExameEspecial,
  getExameEspecial,
  getExameEspecials,
  deleteExameEspecials,
  upDateExameEspecial,
  buscarCadeira,
  getExameEspecialEspecifico,
};
