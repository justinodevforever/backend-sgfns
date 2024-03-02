const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const publicacaoPagina = require("./publicacaoPagina");

const imagePagina = sequelize.define("ImagePagina", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
});

publicacaoPagina.hasMany(imagePagina, {
  foreignKey: "fk_pagina",
  sourceKey: "id",
});

imagePagina.belongsTo(publicacaoPagina, {
  foreignKey: "fk_pagina",
  targetId: "id",
});

module.exports = imagePagina;
