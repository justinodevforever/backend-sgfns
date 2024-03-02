const UsuarioSistema = require("../models/UsuarioSistema");
const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUsuarioSistema = async (req, res) => {
  const { nome } = req.body;
  try {
    const response = await UsuarioSistema.findOne({
      where: {
        nome,
      },
    });
    if (response) {
      res.status(401).json({ msg: "Você não es Professor" });
    } else {
      await UsuarioSistema.create({
        nome,
      });
      res.status(201).json({ msg: "Dados Salvo com sucesso!" });
    }
  } catch (error) {}
};

const getUsuariosSistema = async (req, res) => {
  try {
    const response = await UsuarioSistema.findAll();
    res.status(200).json(response);
  } catch (error) {}
};

const getUsuarioSistema = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await UsuarioSistema.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};
const deleteUsuarioSistema = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await UsuarioSistema.destroy({
      where: {
        id,
      },
    });
  } catch (error) {}
};
const updateUsuarioSistema = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  try {
    const response = await UsuarioSistema.findOne({
      where: {
        nome,
      },
    });

    if (response) {
      response.nome = nome;

      response.save();

      res.status(200).json(response);
    } else {
      res.json({ msg: "Você não es Professor" });
    }
  } catch (error) {}
};

module.exports = {
  createUsuarioSistema,
  getUsuariosSistema,
  getUsuarioSistema,
  deleteUsuarioSistema,
  updateUsuarioSistema,
};
