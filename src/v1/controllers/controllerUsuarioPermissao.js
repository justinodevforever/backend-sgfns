const UsuarioPermisoes = require("../models/UsuarioPermisoes");
const UsuarioSistema = require("../models/UsuarioSistema");
const permissao = require("../models/permissao");
const usuario = require("../models/usuario");

const createUsuarioPermissoes = async (req, res) => {
  const { fk_permissao, fk_user } = req.body;
  try {
    await UsuarioPermisoes.create({
      fk_permissao,
      fk_user,
    });
    res.status(201).json({ msg: "Dados Salvo com sucesso!" });
  } catch (error) {}
};

const getUsuariosPermissoes = async (req, res) => {
  try {
    const response = await UsuarioPermisoes.findAll({
      include: [
        {
          model: usuario,
        },
        { model: permissao },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await UsuarioPermisoes.findOne({
      include: [
        {
          model: usuario,
        },
        { model: permissao },
      ],
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};
const deleteUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await UsuarioPermisoes.destroy({
      where: {
        id,
      },
    });
    res.json({ msg: "Dados Removido com sucesso" });
  } catch (error) {}
};
const updateUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  const { fk_permissao, fk_user } = req.body;

  try {
    const response = await UsuarioPermisoes.findByPk(id);

    if (response) {
      response.fk_permissao = fk_permissao;
      response.fk_user = fk_user;

      response.save();

      res.status(200).json(response);
    }
  } catch (error) {}
};

module.exports = {
  createUsuarioPermissoes,
  getUsuariosPermissoes,
  getUsuarioPermissoes,
  deleteUsuarioPermissoes,
  updateUsuarioPermissoes,
};
