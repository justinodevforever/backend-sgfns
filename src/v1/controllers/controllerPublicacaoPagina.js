const publicacaoPagina = require("../models/publicacaoPagina");
const usuario = require("../models/usuario");

const createPublicationPage = async (req, res) => {
  const { publicacao, fk_pagina, fk_user } = req.body;
  try {
    if (
      fk_user !== undefined &&
      fk_pagina != undefined &&
      publicacao != undefined
    ) {
      const response = await publicacaoPagina.create({
        publicacao,
        fk_pagina,
        fk_user,
      });

      res.status(201).json(response);
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getPublicationsPages = async (req, res) => {
  try {
    const response = await publicacaoPagina.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getPublicationsPagesEspecific = async (req, res) => {
  const { fk_pagina } = req.body;
  const { page = 1 } = req.query;
  try {
    const limit = 6;
    let lastPage = 1;

    const count = await publicacaoPagina.count({
      where: {
        fk_pagina,
      },
    });

    if (count != 0) {
      lastPage = Math.ceil(count / limit);
    }

    if (fk_pagina !== undefined || fk_pagina !== "") {
      const response = await publicacaoPagina.findAll({
        include: [{ model: usuario }],
        order: [["id", "DESC"]],
        where: {
          fk_pagina,
        },
        offset: Number(page * limit - limit),
        limit: limit,
      });
      if (response) {
        const pagination = {
          path: "/publication/page/especific",
          page,
          prev_page: Number(page) - 1 >= 1 ? Number(page) - 1 : false,
          next_page:
            Number(page) + Number(1) > lastPage
              ? false
              : Number(page) + Number(1),
        };
        res.status(200).json({ response, pagination });
      }
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getPublicationPage = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await publicacaoPagina.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deletePublicationPage = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await publicacaoPagina.destroy({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const upDatePublicationPage = async (req, res) => {
  const { publicacao } = req.body;
  const { id } = req.params;
  try {
    const response = await publicacaoPagina.findByPk(id);

    response.publicacao = publicacao;
    response.save();

    res.json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

module.exports = {
  createPublicationPage,
  getPublicationPage,
  getPublicationsPages,
  deletePublicationPage,
  upDatePublicationPage,
  getPublicationsPagesEspecific,
};
