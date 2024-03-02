const Permissao = require("../models/permissao");

const createPermissao = async (req, res) => {
  const { permissao } = req.body;
  try {
    await Permissao.create({
      permissao,
    });
    res.status(201).json({ msg: "Dados Salvo com sucesso!" });
  } catch (error) {}
};

const getPermissoes = async (req, res) => {
  try {
    const response = await Permissao.findAll();
    res.status(200).json(response);
  } catch (error) {}
};

const getPermissao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Permissao.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};
const deletePermissao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Permissao.destroy({
      where: {
        id,
      },
    });
  } catch (error) {}
};
const updatePermissao = async (req, res) => {
  const { id } = req.params;
  const { permissao } = req.body;

  try {
    const response = await Permissao.findByPk(id);

    if (response) {
      response.permissao = permissao;
      response.save();

      res.status(200).json(response);
    }
  } catch (error) {}
};

module.exports = {
  createPermissao,
  getPermissoes,
  getPermissao,
  deletePermissao,
  updatePermissao,
};
