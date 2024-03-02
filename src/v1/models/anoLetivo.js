const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const AnoLetivo = sequelize.define("AnoLetivo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ano: {
    type: DataTypes.STRING,
  },
});

module.exports = AnoLetivo;
