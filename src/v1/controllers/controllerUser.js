const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserSomente = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.usuario.findFirst({
    where: {
      id,
    },
  });
  res.json(user);
  try {
  } catch (error) {
    res.json({ mensage: error });
  }
};
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.userPermission.findMany({
    include: {
      user: {},
      permission: {},
    },
    where: {
      fk_user: id,
    },
  });
  const { password: _, users } = user;
  res.json(user);
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const getUserPorBi = async (req, res) => {
  const { bi } = req.body;
  try {
    const user = await prisma.usuario.findFirst({
      include: {
        permissions: true,
      },
      where: {
        bi,
      },
    });

    res.json(user);
  } catch (error) {
    res.json({ mensage: "error" });
  }
};

const createUser = async (req, res) => {
  const { nome, email, password, contacto, bi } = req.body;
  try {
    if (!nome || !password || !email || !contacto || !bi) {
      return res.json({
        mensage: "Os campos senha, nome não podem estar vazio",
      });
    }
    const Userexistente = await prisma.usuario.findFirst({
      where: {
        email,
      },
    });

    if (!Userexistente) {
      const newPassword = await bcrypt.hash(password, 10);
      const response = await prisma.usuario.create({
        data: {
          nome,
          email,
          password: newPassword,
          contacto,
          bi,
        },
      });
      res
        .status(201)
        .json({ response: response, mensage: "Dados Salvos Com Sucesso" });
    } else {
      res.json({ status: "Falha", mensage: "Usuário já existe" });
    }
    // res.json("Userexistente");
  } catch (error) {
    res.json({ mensage: error });
  }
};

const getUserEspecific = async (req, res) => {
  const { id } = req.id;
  try {
    const user = await prisma.usuario.findFirst({
      where: {
        id,
      },
    });
    res.json(user);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await prisma.usuario.findMany({
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
    const { password: _, ...response } = user;
    res.json(response);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateUser = async (req, res) => {
  const { id } = req.params;

  const { nome, email, contacto, bi } = req.body;

  try {
    await prisma.usuario.update({
      data: {
        nome,
        contacto,
        bi,
        email,
      },
      where: {
        id,
      },
    });
    res.status(200).json({ mensage: "Dados atualizados com sucesso" });
  } catch (error) {
    res.status(201).json({ mensage: error.mensage });
  }
};

const logar = async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await prisma.usuario.findFirst({
      where: {
        email,
      },
    });

    if (!User || User === null) {
      return res.status(201).json({ mensage: "email ou senha Errada" });
    } else {
      if (password === null || typeof password === undefined)
        return res.status(201).json({ mensage: "email ou senha Errada" });
      const verifyPassord = await bcrypt.compare(password, User.password);
      if (!verifyPassord)
        return res.status(201).json({ mensage: "email ou senha Errada" });

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
        message: "sucess",
      });
    }
  } catch (error) {
    res.json({ mensage: error.mensage });
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
    return res.json(error);
  }
};

async function searchUser(req, res) {
  const { nome } = req.body;
  try {
    const user = await prisma.usuario.findFirst({
      where: {
        nome,
      },
    });

    res.json(user);
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
}
async function altearSenha(req, res) {
  const { password, id } = req.body;
  // const { id } = req.params;
  try {
    if (!password || !id) return res.json({ message: "Campo vazio" });
    const newPassord = await bcrypt.hash(password, 10);
    await prisma.usuario.update({
      data: {
        password: newPassord,
      },
      where: {
        id,
      },
    });

    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
}
async function searchUserEmail(req, res) {
  const { email } = req.body;
  try {
    const user = await prisma.usuario.findFirst({
      where: {
        email,
      },
    });

    res.json(user);
  } catch (error) {
    res.json({ mensage: error.mensage });
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
  getUserSomente,
  searchUserEmail,
  altearSenha,
  altearSenha,
};
