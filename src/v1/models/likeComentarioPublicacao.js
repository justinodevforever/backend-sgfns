const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const usuario = require("./usuario");
const comentariosPublicacao = require("./comentarioPublicacao");

const likeComentarioPublicacao = sequelize.define("LikeComentarioPublicacao", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  like: {
    type: DataTypes.BOOLEAN,
  },
});

comentariosPublicacao.hasMany(likeComentarioPublicacao, {
  foreignKey: "fk_comentario",
  sourceKey: "id",
});
likeComentarioPublicacao.belongsTo(comentariosPublicacao, {
  foreignKey: "fk_comentario",
  targetId: "id",
});
usuario.hasMany(likeComentarioPublicacao, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
likeComentarioPublicacao.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = likeComentarioPublicacao;
