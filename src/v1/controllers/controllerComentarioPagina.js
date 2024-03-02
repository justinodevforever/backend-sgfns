const comentarioPagina = require("../models/comentarioPagina");
const publicacaoPagina = require("../models/publicacaoPagina");
const usuario = require("../models/usuario");

const createComentarioPagina = async (req, res) => {
  const { comentario, fk_publicacao, fk_user } = req.body;
  try {
    await comentarioPagina.create({
      comentario,
      fk_publicacao,
      fk_user,
    });
    const response = await comentarioPagina.findAll({
      include: [
        {
          model: usuario,
        },
        { model: publicacaoPagina },
        {
          model: publicacaoPagina,
          include: {
            model: usuario,
          },
        },
      ],
      order: [["id", "DESC"]],
      where: {
        fk_publicacao,
      },
    });

    res.status(201).json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};

const getComentariosPaginas = async (req, res) => {
  const response = await comentarioPagina.findAll();
  res.status(200).json(response);
};
const getComentariosPaginasEspecific = async (req, res) => {
  const { id } = req.params;
  const { page = 1 } = req.query;
  try {
    const { count } = await comentarioPagina.findAndCountAll({
      include: [
        {
          model: usuario,
        },
        { model: publicacaoPagina },
        {
          model: publicacaoPagina,
          include: {
            model: usuario,
          },
        },
      ],

      where: {
        fk_publicacao: id,
      },
    });
    let lastPage = 1;
    const limit = 5;

    if (count !== 0) {
      lastPage = Math.ceil(count / limit);
    }

    if (id !== undefined || id !== null) {
      const response = await comentarioPagina.findAll({
        include: [
          {
            model: usuario,
          },
          { model: publicacaoPagina },
          {
            model: publicacaoPagina,
            include: {
              model: usuario,
            },
          },
        ],
        where: {
          fk_publicacao: id,
        },
        offset: Number(page * limit - limit),
        limit: limit,
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

const getComentarioPagina = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await comentarioPagina.findOne({
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

const upDateComentarioPagina = async (req, res) => {
  const { id } = req.params;
  const { comentario } = req.body;
  try {
    const response = await comentarioPagina.findByPk(id);
    response.comentario = comentario;
    response.save();

    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const deleteComentarioPagina = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await comentarioPagina.destroy({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(201).json(error);
  }
};
const countComentPage = async (req, res) => {
  const { fk_publicacao } = req.body;
  try {
    const count = await comentarioPagina.count({
      include: {
        model: publicacaoPagina,
      },
      where: {
        fk_publicacao,
      },
    });
    res.status(200).json(count);
  } catch (error) {
    res.status(201).json(error);
  }
};
module.exports = {
  createComentarioPagina,
  getComentariosPaginas,
  getComentarioPagina,
  upDateComentarioPagina,
  deleteComentarioPagina,
  getComentariosPaginasEspecific,
  countComentPage,
};
