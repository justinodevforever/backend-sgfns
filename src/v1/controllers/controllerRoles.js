const Roles = require("../models/Roles");

const createRoles = async (req, res) => {
  const { role } = req.body;
  try {
    await Roles.create({
      role,
    });
    res.status(201).json({ msg: "Dados Salvo com sucesso!" });
  } catch (error) {}
};

const getRoles = async (req, res) => {
  try {
    const response = await Roles.findAll();
    res.status(200).json(response);
  } catch (error) {}
};

const getRole = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Roles.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};
const deleteRoles = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Roles.destroy({
      where: {
        id,
      },
    });
  } catch (error) {}
};
const updateRoles = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const response = await Roles.findByPk(id);

    if (response) {
      response.role = role;
      response.save();

      res.status(200).json(response);
    }
  } catch (error) {}
};

module.exports = {
  createRoles,
  getRole,
  getRoles,
  deleteRoles,
  updateRoles,
};
