const image = require("../models/image");
const usuario = require("../models/usuario");

const createImageUser = async (req, res) => {
  const { fk_user, legenda } = req.body;
  try {
    await image.create({
      nome: req.file.filename,
      fk_user,
      legenda,
    });

    res.json(fk_user);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const getImagesUser = async (req, res) => {
  const { fk_user } = req.body;
  try {
    const response = await image.findAll({
      include: {
        model: usuario,
      },
      where: { fk_user },
      order: [["id", "DESC"]],
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const imagesUser = async (req, res) => {
  try {
    const response = await image.findAll({
      include: {
        model: usuario,
      },
      order: [["id", "DESC"]],
    });
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const removeImageUser = async (req, res) => {
  const { id } = req.params;
  try {
    const respose = await image.destroy({
      where: { id },
    });
    res.status(200).json(respose);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

module.exports = {
  createImageUser,
  getImagesUser,
  removeImageUser,
  imagesUser,
};
