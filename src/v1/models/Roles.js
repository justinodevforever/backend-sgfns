const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Roles = sequelize.define("Roles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
  },
});

module.exports = Roles;
