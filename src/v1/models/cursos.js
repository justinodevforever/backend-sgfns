const { sequelize } = require("../database/db");
const { DataTypes, CIDR } = require("sequelize");

const Cursos = sequelize.define("Cursos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  curso: {
    type: DataTypes.STRING,
  },
});

module.exports = Cursos;
