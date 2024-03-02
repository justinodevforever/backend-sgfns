const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const permissao = sequelize.define("permissao", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  permissao: {
    type: DataTypes.STRING,
  },
});

module.exports = permissao;
