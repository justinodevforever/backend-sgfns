const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const UsuarioSistema = sequelize.define("UsuarioSistema", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = UsuarioSistema;
