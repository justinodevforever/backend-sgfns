const { Op } = require("sequelize");
const AnoLetivo = require("../models/anoLetivo");
const AnoFrequencia = require("../models/anoFrequencia");
const Cursos = require("../models/cursos");
const Estudante = require("../models/estudante");
const Reconfirmacao = require("../models/reconfirmacao");
const usuario = require("../models/usuario");
const Semestre = require("../models/semestre");

const createReconfirmacao = async (req, res) => {
  try {
    const {
      valor,
      rupe,
      fk_semestre,
      fk_estudante,
      fk_curso,
      fk_user,
      fk_ano,
      fk_frequencia,
    } = req.body;
    if (
      valor === 0 ||
      rupe === 0 ||
      valor === undefined ||
      fk_ano === 0 ||
      fk_ano === undefined ||
      fk_curso === 0 ||
      fk_curso === undefined ||
      fk_estudante === 0 ||
      fk_estudante === undefined ||
      fk_semestre === 0 ||
      fk_semestre === undefined ||
      fk_user === 0 ||
      fk_user === undefined ||
      fk_frequencia === null ||
      fk_frequencia === undefined
    ) {
      res.status(201).json({ message: "error" });
      return;
    }
    const response = await Reconfirmacao.create({
      valor,
      fk_curso,
      fk_estudante,
      fk_user,
      fk_anoLetivo: fk_ano,
      ano: Date.now(),
      fk_semestre,
      fk_anoFrequencia: fk_frequencia,
      rupe,
    });
    res.status(201).json({ response: response, message: "sucess" });
  } catch (error) {
    res.json(error);
  }
};

const getReconfirmacoes = async (req, res) => {
  try {
    const response = await Reconfirmacao.findAll({
      include: [
        { model: Estudante },
        { model: usuario },
        { model: Cursos },
        { model: AnoLetivo },
        { model: Semestre },
        { model: AnoFrequencia },
      ],
      order: [["id", "DESC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getReconfirmacaoRelatorio = async (req, res) => {
  try {
    const { ano, semestre, bi } = req.body;

    const response = await Reconfirmacao.findOne({
      include: [
        {
          model: Estudante,

          where: {
            bi,
          },
        },

        { model: usuario },
        { model: Cursos },
        {
          model: AnoLetivo,
          where: {
            ano,
          },
        },
        {
          model: Semestre,
          where: {
            nome: semestre,
          },
        },
        { model: AnoFrequencia },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getReconfirmacaoEspecifico = async (req, res) => {
  try {
    const { id } = req.body;

    const response = await Reconfirmacao.findOne({
      include: [
        { model: Estudante },
        { model: usuario },
        { model: Cursos },
        { model: AnoLetivo },
        { model: AnoFrequencia },
        { model: Semestre },
      ],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Reconfirmacao.findOne({
      include: [
        { model: Estudante },
        { model: usuario },
        { model: Cursos },
        { model: AnoLetivo },
      ],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;

    await Reconfirmacao.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateReconfirmacao = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      valor,
      rupe,
      fk_curso,
      fk_estudante,
      fk_user,
      fk_ano,
      fk_anoFrequencia,
      ano,
    } = req.body;

    const resp = await Reconfirmacao.findByPk(id);

    resp.fk_curso = fk_curso;
    resp.fk_estudante = fk_estudante;
    resp.fk_user = fk_user;
    resp.valor = valor;
    resp.fk_ano = fk_ano;
    resp.rupe = rupe;
    resp.ano = ano;
    resp.fk_anoFrequencia = fk_anoFrequencia;
    resp.save();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createReconfirmacao,
  getReconfirmacoes,
  getReconfirmacao,
  deleteReconfirmacao,
  upDateReconfirmacao,
  getReconfirmacaoRelatorio,
  getReconfirmacaoEspecifico,
};
