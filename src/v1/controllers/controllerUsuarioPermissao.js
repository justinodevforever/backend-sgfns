const createUsuarioPermissoes = async (req, res) => {
  const { fk_permissao, fk_user } = req.body;
  try {
    res.status(201).json({ msg: "Dados Salvo com sucesso!" });
  } catch (error) {}
};

const getUsuariosPermissoes = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
const deleteUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  try {
    res.json({ msg: "Dados Removido com sucesso" });
  } catch (error) {}
};
const updateUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  const { fk_permissao, fk_user } = req.body;

  try {
  } catch (error) {}
};

module.exports = {
  createUsuarioPermissoes,
  getUsuariosPermissoes,
  getUsuarioPermissoes,
  deleteUsuarioPermissoes,
  updateUsuarioPermissoes,
};
