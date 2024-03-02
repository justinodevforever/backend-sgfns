const publicacaos = require("../models/publicacao");
const usuario = require("../models/usuario");

const createPublicacao = async (req, res) => {
  try {
    const { publicacao, fk_user } = req.body;
    if (publicacao != undefined || publicacao != "") {
      const an = await publicacaos.create({
        publicacao,
        fk_user,
      });

      const response = await publicacaos.findOne({
        include: {
          model: usuario,
        },
        order: [["id", "DESC"]],
        where: {
          id: an.id,
        },
      });

      res.json(response);
    }
  } catch (error) {
    console.log(error.mensagens);
  }
};

const getPublicacoes = async (req, res) => {
  const { page = 1 } = req.query;

  const limit = 10;
  let lastPage = 1;
  try {
    const countAd = await publicacaos.count();

    if (countAd != 0) {
      lastPage = Math.ceil(countAd / limit);
    }

    const publicacao = await publicacaos.findAll({
      include: {
        model: usuario,
      },
      order: [["id", "DESC"]],
      offset: Number(page * limit - limit),
      limit: limit,
    });
    if (publicacao) {
      let pagination = {
        path: "/getad",
        page,
        prev_page: page - 1 >= 1 ? page - 1 : false,
        next_page:
          Number(page) + Number(1) > lastPage
            ? false
            : Number(page) + Number(1),
      };
      res.json({ publicacao: publicacao, pagination: pagination });
    }
  } catch (error) {
    res.status(201).json(error);
  }
};
const getPublicacaoPerfil = async (req, res) => {
  const { fk_user } = req.body;
  const { page = 1 } = req.query;

  const limit = 10;
  let lastPage = 1;

  try {
    const countAd = await publicacaos.count();

    if (countAd != 0) {
      lastPage = Math.ceil(countAd / limit);
    }

    const publicacao = await publicacaos.findAll({
      include: {
        model: usuario,
      },
      order: [["id", "DESC"]],
      offset: Number(page * limit - limit),
      limit: limit,
      where: {
        fk_user,
      },
    });

    if (publicacao) {
      let pagination = {
        path: "/getad",
        page,
        prev_page: page - 1 >= 1 ? page - 1 : false,
        next_page:
          Number(page) + Number(1) > lastPage
            ? false
            : Number(page) + Number(1),
      };
      res.json({ publicacao: publicacao, pagination: pagination });
    }
  } catch (error) {
    res.status(201).json(error);
  }
};

const upDatePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    const { publicacao, fk_user } = req.body;

    const anun = await publicacaos.findByPk(id);

    anun.publicacao = publicacao;
    anun.fk_user = fk_user;

    anun.save();
  } catch (error) {
    res.status(201).json(error);
  }
};

const getPublicacao = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await publicacaos.findOne({
      include: {
        model: usuario,
      },
      order: [["id", "DESC"]],
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const deletePublicacao = async (req, res) => {
  const { id } = req.params;
  try {
    const anu = await publicacaos.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = {
  createPublicacao,
  getPublicacao,
  getPublicacoes,
  upDatePublicacao,
  deletePublicacao,
  getPublicacaoPerfil,
};
