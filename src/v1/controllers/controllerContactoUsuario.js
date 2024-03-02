const { Sequelize } = require("../database/db");
const { Op } = require("sequelize");
const contactosUsuarios = require("../models/contactosUsuario");
const usuario = require("../models/usuario");
const mensagem = require("../models/mensagem");

const createContactUsuario = async (req, res) => {
  const { sendId, receiveId, seguir } = req.body;
  try {
    const response = await contactosUsuarios.create({
      sendId,
      receiveId,
      seguir,
    });

    res.json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getContactsusuario = async (req, res) => {
  const { receiveId, sendId } = req.body;

  try {
    const response = await contactosUsuarios.findAll({
      include: [
        {
          model: usuario,
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getContactUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await contactosUsuarios.findOne({
      where: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const ContactUsuario = async (req, res) => {
  try {
    const response = await contactosUsuarios.findAll({
      include: [
        {
          model: usuario,
          as: "Sender",
        },
        {
          model: usuario,
          as: "Receiver",
        },
        {
          model: mensagem,
          order: [["createdAt", "DESC"]],
        },
      ],

      where: {
        [Op.or]: [
          {
            receiveId: req.params.userId,
          },
          {
            sendId: req.params.userId,
          },
        ],
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ mensage: error.mensage });
  }
};
const Contactusuariopecific = async (req, res) => {
  const { contactId, userId } = req.body;
  try {
    const response = await contactosUsuarios.findOne({
      include: [
        {
          model: usuario,
          as: "Sender",
        },
        {
          model: usuario,
          as: "Receiver",
        },
        {
          model: mensagem,
          order: [["id", "DESC"]],
        },
      ],

      where: {
        [Op.or]: [
          { receiveId: userId, sendId: contactId },
          { receiveId: contactId, sendId: userId },
        ],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deleteContactUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await contactosUsuarios.destroy({ where: { id } });
    res.json(response);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const upDateContactUsuario = async (req, res) => {
  const { id } = req.params;
  const { receiveId, sendId } = req.body;
  try {
    if (
      receiveId != undefined &&
      receiveId != null &&
      sendId != undefined &&
      sendId != null &&
      id != undefined &&
      id != null
    ) {
      const response = await contactosUsuarios.findByPk(id);

      response.receiveId = receiveId;
      response.sendId = sendId;

      response.save();
      res.json(response);
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

module.exports = {
  createContactUsuario,
  getContactUsuario,
  getContactsusuario,
  deleteContactUsuario,
  upDateContactUsuario,
  ContactUsuario,
  Contactusuariopecific,
};
