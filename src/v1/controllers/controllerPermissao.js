const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createPermissao = async (req, res) => {
  const { permissao } = req.body;
  try {
    if (!permissao) return;
    const response = await prisma.permission.create({
      data: {
        permissao: permissao,
      },
    });
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error", error: error });
  }
};

const getPermissoes = async (req, res) => {
  try {
    const response = await prisma.permission.findMany();
    res.json(response);
  } catch (error) {}
};

const getPermissao = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await prisma.permission.findFirst({
      where: {
        id,
      },
    });
    res.json(response);
  } catch (error) {}
};
const deletePermissao = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
};
const updatePermissao = async (req, res) => {
  const { id } = req.params;
  const { permissao } = req.body;

  try {
  } catch (error) {}
};

module.exports = {
  createPermissao,
  getPermissoes,
  getPermissao,
  deletePermissao,
  updatePermissao,
};
