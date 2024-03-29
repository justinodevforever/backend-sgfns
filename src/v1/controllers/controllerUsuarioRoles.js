const UsuarioRoles = require("../models/UsuarioRoles");
const UsuarioSistema = require("../models/UsuarioSistema");
const Roles = require("../models/Roles");
const usuario = require("../models/usuario");
const { decode } = require("jsonwebtoken");

const createUsuarioRoles = async (req, res) => {
  const { fk_roles, fk_user } = req.body;
  try {
    res.status(201).json({ msg: "Dados Salvo com sucesso!" });
  } catch (error) {}
};

const getUsuariosRoles = async (req, res) => {
  try {
  } catch (error) {}
};

const getUsuarioRolesEspecifico = async (req, res) => {
  const { id } = req.params;
  const authHeader = req.headers.authorization;
  const [, token] = authHeader.split(" ");

  // if (!token) {
  //   return res.status(401).json("Você não está autorizado");
  // }
  // const payload = decode(token);

  try {
    //   const response = await UsuarioRoles.findAll({
    //     include: [
    //       {
    //         model: usuario,
    //       },
    //       { model: Roles },
    //     ],
    //     where: {
    //       fk_user: payload?.id,
    //     },
    //   });
    //   res.status(200).json(response);
  } catch (error) {}
};
const getUsuarioRoles = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
const deleteUsuarioRoles = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await UsuarioRoles.destroy({
      where: {
        id,
      },
    });
    res.json({ msg: "Dados Removido com sucesso" });
  } catch (error) {}
};
const updateUsuarioRoles = async (req, res) => {
  const { id } = req.params;
  const { fk_roles, fk_user } = req.body;

  try {
  } catch (error) {}
};

module.exports = {
  createUsuarioRoles,
  getUsuariosRoles,
  getUsuarioRoles,
  deleteUsuarioRoles,
  updateUsuarioRoles,
  getUsuarioRolesEspecifico,
};
