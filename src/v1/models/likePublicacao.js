const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const publicacao = require("./publicacao");
const usuario = require("./usuario");

const likePublicacao = sequelize.define("LikePublicacao", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  like: {
    type: DataTypes.BOOLEAN,
  },
});

publicacao.hasMany(likePublicacao, {
  foreignKey: "fk_publicacao",
  sourceKey: "id",
});
likePublicacao.belongsTo(publicacao, {
  foreignKey: "fk_publicacao",
  targetId: "id",
});
usuario.hasMany(likePublicacao, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
likePublicacao.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = likePublicacao;
