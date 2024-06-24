const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUsuarioPermissoes = async (req, res) => {
  const { fk_permission, fk_user } = req.body;
  try {
    if (!fk_permission || !fk_user) {
      res.json({ message: "error" });
      return;
    }
    const response = await prisma.userPermission.create({
      data: {
        fk_permission,
        fk_user,
      },
    });
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getUsuariosPermissoes = async (req, res) => {
  try {
    const response = await prisma.userPermission.findMany({
      include: {
        user: true,

        permission: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getUsuarioPermissoesChat = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.userPermission.findMany({
      include: {
        user: true,
        permission: true,
      },
      where: {
        permission: {
          OR: [
            {
              permissao: "secretário",
            },
            {
              permissao: "admin",
            },
          ],
        },
      },
    });
    res.json(response);
  } catch (error) {}
};
const getUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.userPermission.findFirst({
      include: {
        user: true,
        permission: true,
      },
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {}
};
const deleteUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.userPermission.delete({ where: { id } });
    res.json({ msg: "Dados Removido com sucesso" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
const updateUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  const { fk_permission, fk_user } = req.body;

  try {
    await prisma.userPermission.update({
      data: {
        fk_permission,
        fk_user,
      },
      where: {
        id,
      },
    });
    res.json({ message: "sucess" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createUsuarioPermissoes,
  getUsuariosPermissoes,
  getUsuarioPermissoes,
  deleteUsuarioPermissoes,
  updateUsuarioPermissoes,
  getUsuarioPermissoesChat,
};
