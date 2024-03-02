const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Semestre = sequelize.define(
  "Semestre",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      unique: true,
    },
    numero: {
      type: DataTypes.INTEGER,
    },
  },
  { timestemps: false }
);

module.exports = Semestre;
