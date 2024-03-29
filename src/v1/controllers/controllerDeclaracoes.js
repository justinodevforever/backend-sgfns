const createDeclaracoes = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};

const getDeclaracoes = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};

const deleteDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createDeclaracoes,
  getDeclaracoes,
  deleteDeclaracoes,
  upDateDeclaracoes,
};
