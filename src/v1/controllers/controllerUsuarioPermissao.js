const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUsuarioPermissoes = async (req, res) => {
  const { fk_permissao, fk_user } = req.body;
  try {
    if (!fk_permissao || !fk_user) {
      res.json({ message: "error" });
      return;
    }
    const response = await prisma.userPermission.create({
      data: {
        fk_permission: fk_permissao,
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
    res.json({ msg: "Dados Removido com sucesso" });
  } catch (error) {}
};
const updateUsuarioPermissoes = async (req, res) => {
  const { id } = req.params;
  const { fk_permissao, fk_user } = req.body;

  try {
  } catch (error) {}
};

module.exports = {
  createUsuarioPermissoes,
  getUsuariosPermissoes,
  getUsuarioPermissoes,
  deleteUsuarioPermissoes,
  updateUsuarioPermissoes,
};
