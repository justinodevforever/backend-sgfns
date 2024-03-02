const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const publicacao = require("./publicacao");

const imagePublicacao = sequelize.define("ImagePublicacao", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
});

publicacao.hasMany(imagePublicacao, {
  foreignKey: "fk_publicacao",
  sourceKey: "id",
});

imagePublicacao.belongsTo(publicacao, {
  foreignKey: "fk_publicacao",
  targetId: "id",
});

module.exports = imagePublicacao;
