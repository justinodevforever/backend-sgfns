const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const AnoFrequencia = sequelize.define("AnoFrequencias", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ano: {
    type: DataTypes.STRING,
  },
});

module.exports = AnoFrequencia;
