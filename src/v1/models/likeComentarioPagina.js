const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const comentarioPagina = require("./comentarioPagina");
const usuario = require("./usuario");

const likeComentarioPagina = sequelize.define("LikeComentarioPagina", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  like: {
    type: DataTypes.BOOLEAN,
  },
});

comentarioPagina.hasMany(likeComentarioPagina, {
  foreignKey: "fk_comentario",
  sourceKey: "id",
});
likeComentarioPagina.belongsTo(comentarioPagina, {
  foreignKey: "fk_comentario",
  targetId: "id",
});
usuario.hasMany(likeComentarioPagina, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
likeComentarioPagina.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = likeComentarioPagina;
