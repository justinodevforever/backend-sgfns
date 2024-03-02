const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Mes = sequelize.define("Mes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mes: {
    type: DataTypes.STRING,
  },
  algarismo: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Mes;
