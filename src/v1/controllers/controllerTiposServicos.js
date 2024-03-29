const createTiposServicos = async (req, res) => {
  try {
    const { tipo, valor } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const getTiposServicoss = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getTiposServicos = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const getTiposServicosEspecifico = async (req, res) => {
  try {
    const { tipo } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const deleteTiposServicos = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateTiposServicos = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createTiposServicos,
  getTiposServicos,
  getTiposServicoss,
  deleteTiposServicos,
  upDateTiposServicos,
  getTiposServicosEspecifico,
};
