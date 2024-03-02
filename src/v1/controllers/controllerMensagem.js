const contactosUsuarios = require("../models/contactosUsuario");
const mensagem = require("../models/mensagem");
const mensage = require("../models/mensagem");
const { Op } = require("sequelize");
const usuario = require("../models/usuario");

const getMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await mensagem.findAll({
      include: [
        {
          model: contactosUsuarios,
          include: [
            {
              model: usuario,
              as: "Sender",
            },
            {
              model: usuario,
              as: "Receiver",
            },
          ],
          where: {
            [Op.or]: {
              sendId: id,
              receiveId: id,
            },
          },
        },
      ],

      where: {
        [Op.and]: {
          lida: false,
          [Op.not]: {
            sendId: req.params.id,
          },
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ mensage: error.mensage });
  }
};

const createMensagem = async (req, res) => {
  const { sms, contactId, sendId, createdAt } = req.body;

  try {
    const response = await mensage.create({
      sms,
      contactId,
      sendId,
      createdAt,
    });

    const resp = await mensagem.findOne({
      include: [
        {
          model: contactosUsuarios,
          include: [
            {
              model: usuario,
              as: "Sender",
            },
            {
              model: usuario,
              as: "Receiver",
            },
          ],
        },
      ],

      where: {
        id: response.id,
      },
    });

    res
      .status(200)
      .json({ response: resp, mensage: "Dados Salvos Com Sucesso" });
  } catch (error) {
    res.status(400).json({ mensage: error.mensage });
  }
};

const getMensagens = async (req, res) => {
  try {
    const sms = await mensage.findAll();
    res.json(sms);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemporNome = async (req, res) => {
  try {
    const response = await mensagem.findAll({
      include: [
        {
          model: contactosUsuarios,
          include: [
            {
              model: usuario,
              as: "Sender",
            },
            {
              model: usuario,
              as: "Receiver",
            },
          ],
        },
      ],

      where: {
        contactId: req.params.contactId,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemNaoLida = async (req, res) => {
  try {
    const response = await mensagem.findAll({
      include: [
        {
          model: contactosUsuarios,
          include: [
            {
              model: usuario,
              as: "Sender",
            },
            {
              model: usuario,
              as: "Receiver",
            },
          ],
        },
      ],

      where: {
        [Op.and]: {
          contactId: req.params.contactId,
          lida: false,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemporNomeOrder = async (req, res) => {
  try {
    const response = await mensagem.findAll({
      include: [
        {
          model: contactosUsuarios,
          include: [
            {
              model: usuario,
              as: "Sender",
            },
            {
              model: usuario,
              as: "Receiver",
            },
          ],
        },
      ],
      order: [["id", "DESC"]],
      where: {
        contactId: req.params.contactId,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    const sms = await mensage.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({ user: "Removido Com sucesso" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateMensagem = async (req, res) => {
  const { id } = req.params;

  try {
    const { sms, lida, contactId } = req.body;
    const mens = await mensage.findByPk(id);

    mens.sms = sms;
    mens.lida = lida;

    mens.save();

    res
      .status(200)
      .json({ mensage: "Dados atualizados com sucesso", response: mens });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

module.exports = {
  createMensagem,
  getMensagens,
  getMensagem,
  deleteMensagem,
  upDateMensagem,
  getMensagemporNome,
  getMensagemporNomeOrder,
  getMensagemNaoLida,
};
