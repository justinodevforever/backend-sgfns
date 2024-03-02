const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const declaracoes = sequelize.define("Declaracoes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.TEXT,
  },
});

module.exports = declaracoes;
