const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const contacto = sequelize.define("Contacto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
});

module.exports = contacto;
