const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsuarioSistema = require("../models/UsuarioSistema");
const Professor = require("../models/professor");
const Displina = require("../models/disciplina");
const Cursos = require("../models/cursos");
const AnoFrequencia = require("../models/anoFrequencia");

const createProfessor = async (req, res) => {
  try {
    const { nome, email, password } = req.body;
    const newPassword = await bcript.hash(password, 10);
    const resp = await UsuarioSistema.findOne({
      where: {
        nome,
      },
    });
    const respo = await Professor.findOne({
      where: {
        nome,
      },
    });

    if (!resp || (respo !== null && respo)) {
      res.status(401).json({ msg: "Você não es Professor" });
      return;
    } else {
      const response = await Professor.create({
        nome,
        password: newPassword,
        email,
      });
      res.status(201).json({ user: response, msg: "Dados Salvo com sucesso!" });
    }
  } catch (error) {
    res.json(error);
  }
};

const getProfessores = async (req, res) => {
  try {
    const response = await Professor.findAll({
      include: [
        {
          model: Displina,

          include: [
            {
              model: Cursos,
            },
            { model: AnoFrequencia },
          ],
        },
      ],
      order: [["nome", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
const getProfessor = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Professor.findOne({
      include: [
        {
          model: Displina,

          include: [
            {
              model: Cursos,
            },
            { model: AnoFrequencia },
          ],
        },
      ],
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteProfessor = async (req, res) => {
  try {
    const { id } = req.params;

    await Professor.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateProfessor = async (req, res) => {
  const { email, nome } = req.body;
  const { id } = req.body;

  try {
    const response = await Professor.findByPk(id);

    if (response) {
      response.email = email;
      response.nome = nome;
      response.save();

      res.status(200).json(response);
    }
  } catch (error) {}
};
const logarSistema = async (req, res) => {
  const { password, nome } = req.body;

  try {
    const response = await Professor.findOne({
      where: {
        nome,
      },
    });

    if (!response) {
      res.json({ msg: "Nome ou Senha inválido! " });
    } else {
      if (password === null || typeof password === undefined)
        res.json({ msg: "Nome ou Senha inválido! " });

      const verifyPassword = await bcript.compare(password, response.password);

      if (!verifyPassword) res.json({ msg: "Nome ou Senha inválido! " });

      const token = await jwt.sign(
        { nome: response.nome },
        process.env.KEY_SECRET_USER,
        { expiresIn: "2h" }
      );
      res.json({ response: response, token: token, msg: "password valid" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProfessor,
  getProfessor,
  getProfessores,
  deleteProfessor,
  upDateProfessor,
  logarSistema,
};
