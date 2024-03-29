const createlikeComunicado = async (req, res) => {
  const { like, fk_user } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComunicados = async (req, res) => {
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getLikeComunicado = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const getlikeComunicadoEspecific = async (req, res) => {
  const { fk_user } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const getlikeComunicadoEspecificUser = async (req, res) => {
  const { fk_user, cliclike } = req.body;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDatelikeComunicado = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

const deletelikeComunicado = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(201).json(error);
  }
};
const CountlikeComunicado = async (req, res) => {
  const { like } = req.body;

  try {
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createlikeComunicado,
  getLikeComunicado,
  getlikeComunicadoEspecific,
  getLikeComunicados,
  upDatelikeComunicado,
  deletelikeComunicado,
  CountlikeComunicado,
  getlikeComunicadoEspecificUser,
};
