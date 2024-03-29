const createPermissao = async (req, res) => {
  const { permissao } = req.body;
  try {
    res.status(201).json({ msg: "Dados Salvo com sucesso!" });
  } catch (error) {}
};

const getPermissoes = async (req, res) => {
  try {
  } catch (error) {}
};

const getPermissao = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
const deletePermissao = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
const updatePermissao = async (req, res) => {
  const { id } = req.params;
  const { permissao } = req.body;

  try {
  } catch (error) {}
};

module.exports = {
  createPermissao,
  getPermissoes,
  getPermissao,
  deletePermissao,
  updatePermissao,
};
