const createRoles = async (req, res) => {
  const { role } = req.body;
  try {
    res.status(201).json({ msg: "Dados Salvo com sucesso!" });
  } catch (error) {}
};

const getRoles = async (req, res) => {
  try {
  } catch (error) {}
};

const getRole = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
const deleteRoles = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
const updateRoles = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
  } catch (error) {}
};

module.exports = {
  createRoles,
  getRole,
  getRoles,
  deleteRoles,
  updateRoles,
};
