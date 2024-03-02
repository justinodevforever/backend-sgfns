const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const usuario = require("./usuario");

const publicacaoPagina = sequelize.define("publicacaoPagina", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  publicacao: {
    type: DataTypes.STRING,
  },
  amem: {
    type: DataTypes.INTEGER,
  },
});

usuario.hasMany(publicacaoPagina, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
publicacaoPagina.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = publicacaoPagina;
