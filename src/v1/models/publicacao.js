const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const usuario = require("./usuario");

const publicacoes = sequelize.define("Publicacao", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  publicacao: {
    type: DataTypes.TEXT,
  },
});

usuario.hasMany(publicacoes, {
  foreignKey: "fk_user",
  sourceKey: "id",
});

publicacoes.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = publicacoes;
