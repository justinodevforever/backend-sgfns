const declaracoes = require("../models/Declaracoes");

const createDeclaracoes = async (req, res) => {
  try {
    const { nome, desc } = req.body;

    const response = await declaracoes.create({
      nome,
      desc,
    });

    const data = await declaracoes.findOne({
      where: {
        id: response.id,
      },
    });

    res.status(201).json(data);
  } catch (error) {
    res.json(error);
  }
};

const getDeclaracoes = async (req, res) => {
  try {
    const response = await declaracoes.findAll({
      order: [["nome", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;

    await declaracoes.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.json(error);
  }
};
const upDateDeclaracoes = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;

    const resp = await declaracoes.findByFk(id);

    resp.nome = nome;
    resp.save();
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
