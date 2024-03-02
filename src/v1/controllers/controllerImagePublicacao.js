const imagePublicacao = require("../models/imagePublicacao");
const publicacoes = require("../models/publicacao");

const createImagePublicacao = async (req, res) => {
  const { fk_publicacao } = req.body;

  try {
    const filename = req.file;

    if (filename !== undefined) {
      const response = await imagePublicacao.create({
        nome: filename.filename,
        fk_publicacao,
      });
      res.status(200).json(response);
    } else {
      const response = await imagePublicacao.create({
        nome: "",
        fk_publicacao,
      });
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getImagePublicacao = async (req, res) => {
  try {
    const response = await imagePublicacao.findAll({
      include: {
        model: publicacoes,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getImagePublication = async (req, res) => {
  const { fk_publicacao } = req.body;
  try {
    const response = await imagePublicacao.findOne({
      include: {
        model: publicacoes,
      },
      where: {
        fk_publicacao,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};

const updateImagePublicacao = async (req, res) => {
  const { fk_publicacao } = req.body;
  const { id } = req.params;
  try {
    const { filename } = req.file;

    const imgPu = await imagePublicacao.findByPk(id);
    imgPu.fk_publicacao = fk_publicacao;
    imgPu.nome = filename;

    imgPu.save();
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deleteImagePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await imagePublicacao.destroy({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

module.exports = {
  createImagePublicacao,
  getImagePublicacao,
  updateImagePublicacao,
  deleteImagePublicacao,
  getImagePublication,
};
