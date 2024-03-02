const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const TiposServicos = sequelize.define(
  "TiposServicos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      unique: true,
    },
    valor: {
      type: DataTypes.DOUBLE,
    },
  },
  { timestemps: true }
);
module.exports = TiposServicos;
