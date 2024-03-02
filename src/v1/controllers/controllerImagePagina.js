const imagePagina = require("../models/imagePagina");
const publicacaoPagina = require("../models/publicacaoPagina");

const createImagePage = async (req, res) => {
  const { fk_pagina } = req.body;
  try {
    const file = req.file;

    if (file !== undefined) {
      const response = await imagePagina.create({
        nome: file.filename,
        fk_pagina,
      });
      res.json(response);
    } else {
      const response = await imagePagina.create({
        nome: "",
        fk_pagina,
      });
      res.json(response);
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getImagePage = async (req, res) => {
  const { fk_pagina } = req.body;
  try {
    const response = await imagePagina.findAll({
      include: {
        model: publicacaoPagina,
      },
      where: { fk_pagina },
      order: [["id", "DESC"]],
    });
    res.json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getImagesPages = async (req, res) => {
  try {
    const response = await imagePagina.findAll({
      include: {
        model: publicacaoPagina,
      },
      order: [["id", "DESC"]],
    });
    res.json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const removeImagePage = async (req, res) => {
  const { id } = req.params;
  try {
    const respose = await imagePagina.destroy({
      where: { id },
    });
    res.status(200).json(respose);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

module.exports = {
  createImagePage,
  getImagePage,
  removeImagePage,
  getImagesPages,
};
