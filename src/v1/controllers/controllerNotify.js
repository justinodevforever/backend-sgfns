const Notify = require("../models/notiy");

const createNotify = async (req, res) => {
  const { nome, massege, idPublicacao } = req.body;
  try {
    const response = await Notify.create({
      nome,
      massege,
      idPublicacao,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getNotify = async (req, res) => {
  try {
    const response = await Notify.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

module.exports = {
  createNotify,
  getNotify,
};
