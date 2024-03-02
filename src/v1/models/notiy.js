const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Notify = sequelize.define("Notify", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
  massege: {
    type: DataTypes.STRING,
  },
  idAnuncio: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Notify;
