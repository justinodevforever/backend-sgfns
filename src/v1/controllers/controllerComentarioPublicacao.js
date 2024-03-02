const comentariosPublicacao = require("../models/comentarioPublicacao");
const publicacoes = require("../models/publicacao");
const usuario = require("../models/usuario");

const getComentarioPublicacao = async (req, res) => {
  const { id } = req.params;
  const coment = await comentariosPublicacao.findOne({
    where: {
      id,
    },
  });

  res.status(200).json(coment);
};
const createComentarioPublicacao = async (req, res) => {
  const { comentario, fk_user, fk_publicacao } = req.body;

  await comentariosPublicacao.create({
    comentario,
    fk_user,
    fk_publicacao,
  });
  const response = await comentariosPublicacao.findAll({
    include: [
      {
        model: usuario,
      },
      { model: publicacoes },
      {
        model: publicacoes,
        include: {
          model: usuario,
        },
        where: {
          id: fk_publicacao,
        },
      },
    ],

    where: {
      fk_publicacao,
    },

    order: [["id", "DESC"]],
  });

  res
    .status(200)
    .json({ response: response, mensage: "Dados Salvos Com Sucesso" });
};

const getComentariosPublicacoes = async (req, res) => {
  const coment = await comentariosPublicacao.findAll();
  res.json(coment);
};

const deleteComentarioPublicacao = async (req, res) => {
  const { id } = req.params;

  const coment = await comentariosPublicacao.destroy({
    where: {
      id,
    },
  });

  res.status(200).json({ user: "Removido Com sucesso" });
};

const upDatecomentarioPublicacao = async (req, res) => {
  const { id } = req.params;

  const { comentario } = req.body;

  try {
    const coment = await comentariosPublicacao.findByPk(id);

    coment.comentario = comentario;

    coment.save();

    res.status(200).json({ mensage: "Dados atualizados com sucesso" });
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getComentSpecific = async (req, res) => {
  const { fk_publicacao } = req.body;
  const { page = 1 } = req.query;
  try {
    const { count } = await comentariosPublicacao.findAndCountAll({
      include: {
        model: publicacoes,
      },
      where: {
        fk_publicacao,
      },
    });
    let lastPage = 1;
    const limit = 4;

    if (count !== 0) {
      lastPage = Math.ceil(count / limit);
    }

    if (fk_publicacao !== undefined || fk_publicacao !== null) {
      const response = await comentariosPublicacao.findAll({
        include: [
          {
            model: usuario,
          },
          { model: publicacoes },
          {
            model: publicacoes,
            include: {
              model: usuario,
            },
            where: {
              id: fk_publicacao,
            },
          },
        ],
        offset: Number(page * limit - limit),
        limit: limit,

        where: {
          fk_publicacao,
        },
      });

      const pagination = {
        path: "getcomentpublicaction",
        page,
        prev_page: page - 1 >= 1 ? page - 1 : false,
        next_page:
          Number(page) + Number(1) > lastPage
            ? false
            : Number(page) + Number(1),
      };
      res.status(200).json({ response: response, pagination });
    }
  } catch (error) {
    res.status(201).json(error);
  }
};

const count = async (req, res) => {
  const { fk_publicacao } = req.body;

  try {
    const count = await comentariosPublicacao.findAndCountAll({
      include: {
        model: publicacoes,
      },
      where: {
        fk_publicacao,
      },
    });
    res.json(count);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createComentarioPublicacao,
  getComentariosPublicacoes,
  getComentarioPublicacao,
  deleteComentarioPublicacao,
  upDatecomentarioPublicacao,
  getComentSpecific,
  count,
};
