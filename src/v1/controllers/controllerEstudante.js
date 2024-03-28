const Estudante = require("../models/estudante");
const { Op } = require("sequelize");
const usuario = require("../models/usuario");
const Propina = require("../models/propina");
const AnoLetivo = require("../models/anoLetivo");
const Cursos = require("../models/cursos");

const getEstudante = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Estudante.findOne({
      include: [{ model: Cursos }, { model: usuario }],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ message: "error" });
  }
};
const buscaEstudantePorBi = async (req, res) => {
  const { bi } = req.body;
  try {
    const response = await Estudante.findOne({
      include: [{ model: Cursos }, { model: usuario }, { model: Propina }],

      where: {
        bi,
      },
    });

    // if(response.)

    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};
const createEstudante = async (req, res) => {
  const { nome, bi, contato, fk_user, fk_curso, periodo } = req.body;

  try {
    if (!nome || !bi || !contato || !fk_curso || !fk_user || !periodo) {
      res.json({ message: "error" });
      return;
    }
    const estudante = await Estudante.findOne({
      where: {
        bi,
      },
    });
    if (estudante) {
      res.status(200).json({ message: "exist" });
      return;
    }

    const response = await Estudante.create({
      nome,
      bi,
      contato,
      fk_user,
      fk_curso,
      periodo,
    });

    res.status(200).json({ response: response, message: "sucess" });
  } catch (error) {
    res.status(401).json({ message: "error" });
  }
};

const getEstudantes = async (req, res) => {
  try {
    const response = await Estudante.findAll();
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getEstudanteBi = async (req, res) => {
  try {
    const { bi } = req.body;
    const response = await Estudante.findOne({
      include: [
        {
          model: usuario,
        },
        {
          model: Cursos,
        },
        {
          model: Propina,
        },
      ],
      where: {
        bi,
      },
    });
    res.json(response);
  } catch (error) {}
};
const getEstudanteEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await Estudante.findAll({
      include: [
        {
          model: usuario,
        },
      ],
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {}
};
const getAllEstudante = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await Estudante.findAll({
      include: {
        model: usuario,
      },
      where: {
        fk_user,
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getEstudantePorUsuario = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await Estudante.findOne({
      include: {
        model: usuario,
      },
      where: {
        fk_user,
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deleteEstudante = async (req, res) => {
  const { id } = req.params;
  try {
    await Estudante.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({ user: "Removido Com sucesso" });
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const upDateEstudante = async (req, res) => {
  const { id } = req.params;

  const { nome, contato, fk_curso, periodo } = req.body;

  if (!nome || !contato || !fk_curso || !periodo) {
    res.json({ message: "error" });
    return;
  }

  try {
    const response = await Estudante.findByPk(id);

    response.nome = nome;
    response.contato = contato;
    response.fk_curso = fk_curso;
    response.periodo = periodo;

    response.save();

    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchEstudante = async (req, res) => {
  const { nome } = req.body;
  try {
    if (nome !== "") {
      const response = await Estudante.findAll({
        include: {
          model: usuario,
        },
        where: {
          nome: {
            [Op.like]: `%${nome}%`,
          },
        },
      });

      res.json(response);
    }
  } catch (error) {
    res.json({ mensage: "error" });
  }
};

module.exports = {
  createEstudante,
  getEstudante,
  getEstudantes,
  deleteEstudante,
  upDateEstudante,
  getEstudanteEspecifico,
  getAllEstudante,
  searchEstudante,
  buscaEstudantePorBi,
  getEstudantePorUsuario,
  getEstudanteBi,
};
