const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const usuario = sequelize.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  nome: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },

  contacto: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  bi: {
    type: DataTypes.STRING,
  },
});

module.exports = usuario;
