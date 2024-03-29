const createMes = async (req, res) => {
  try {
    const { mes, algarismo } = req.body;

    res.status(201).json("");
  } catch (error) {
    res.json(error);
  }
};

const getMeses = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getMes = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const buscaMes = async (req, res) => {
  try {
    const { mes } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const deleteMes = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateMes = async (req, res) => {
  try {
    const { id } = req.params;
    const { mes, algarismo } = req.body;
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createMes,
  getMes,
  getMeses,
  deleteMes,
  upDateMes,
  buscaMes,
};
