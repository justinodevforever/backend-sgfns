const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const usuario = require("../models/usuario");
const UsuarioPermissoes = require("../models/UsuarioPermisoes");
const UsuarioRoles = require("../models/UsuarioRoles");
const Roles = require("../models/Roles");
const permissao = require("../models/permissao");

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id !== undefined || id === null) {
      const { dataValues } = await usuario.findOne({
        include: [
          {
            model: UsuarioPermissoes,
            include: {
              model: permissao,
            },
          },
          {
            model: UsuarioRoles,
            include: {
              model: Roles,
            },
          },
        ],
        where: {
          id,
        },
      });

      res.status(200).json(dataValues.UsuarioPermissoes);
    }
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const getUserPorBi = async (req, res) => {
  const { bi } = req.body;
  try {
    if (bi !== undefined || bi === null) {
      const user = await usuario.findOne({
        include: [{ model: UsuarioPermissoes }, { model: UsuarioRoles }],
        where: {
          bi,
        },
      });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const createUser = async (req, res) => {
  const { nome, email, password, contacto, bi } = req.body;
  try {
    if (!nome || !password || !email || !contacto || !bi) {
      res.json({ mensage: "Os campos senha, nome não podem estar vazio" });
    } else {
      const Userexistente = await usuario.findOne({
        where: {
          email,
        },
      });

      if (!Userexistente) {
        const newPassword = await bcrypt.hash(password, 10);
        const response = await usuario.create({
          nome,
          email,
          password: newPassword,
          contacto,
          bi,
        });

        res
          .status(200)
          .json({ response: response, mensage: "Dados Salvos Com Sucesso" });
      } else {
        res.status(401).json({ status: "Falha", mensage: "Usuário já existe" });
      }
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getUserEspecific = async (req, res) => {
  const { id } = req.id;
  try {
    if (id !== undefined || id === null) {
      const User = await usuario.findByPk(id);
      console.log(id);
      res.status(200).json(User);
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getAllUser = async (req, res) => {
  try {
    const User = await usuario.findAll({
      include: [
        {
          model: UsuarioPermissoes,
          include: {
            model: permissao,
          },
        },
        {
          model: UsuarioRoles,
          include: {
            model: Roles,
          },
        },
      ],
    });
    res.status(200).json(User);
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const User = await usuario.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({ User: User, message: "Removido Com sucesso" });
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const upDateUser = async (req, res) => {
  const { id } = req.params;

  const { nome, email, contacto, bi } = req.body;

  try {
    const User = await usuario.findByPk(id);

    User.nome = nome;
    User.email = email;
    User.contacto = contacto;
    User.bi = bi;

    User.save();

    res.status(200).json({ mensage: "Dados atualizados com sucesso" });
  } catch (error) {
    res.status(201).json({ mensage: error.mensage });
  }
};

const logar = async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await usuario.findOne({
      where: {
        email,
      },
    });

    if (!User) {
      res.status(201).json({ mensage: "email ou senha Errada" });
    } else {
      if (password === null || typeof password === undefined)
        res.status(201).json({ mensage: "email ou senha Errada" });

      const verifyPassord = await bcrypt.compare(password, User.password);

      if (verifyPassord) {
        const refresh_token = await jwt.sign(
          { id: User.id },
          process.env.KEY_SECRET_REFRESHTOKEN,
          {
            expiresIn: "24h",
          }
        );
        const token = await jwt.sign({ id: User.id }, process.env.KEY_SECRET, {
          expiresIn: "2h",
        });

        const { password: _, ...loginpass } = User;

        res.json({
          User: loginpass,
          token: token,
          refreshToken: refresh_token,
        });
      } else {
        res.status(201).json({ mensage: "email ou senha Errada" });
      }
    }
  } catch (error) {
    res.status(201).json({ mensage: error.mensage });
  }
};

const verifyToken = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const token = await jwt.sign({ refreshToken }, process.env.KEY_SECRET, {
      expiresIn: "2h",
    });

    return res.json(token);
  } catch (error) {
    return res.status(401).json(error);
  }
};

async function searchUser(req, res) {
  const { nome } = req.body;
  try {
    if (nome !== "") {
      const response = await usuario.findAll({
        where: {
          nome: { [Op.like]: `%${nome}%` },
        },
      });
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
}

module.exports = {
  getUser,
  getUserEspecific,
  createUser,
  upDateUser,
  deleteUser,
  logar,
  searchUser,
  verifyToken,
  getAllUser,
  getUserPorBi,
};
