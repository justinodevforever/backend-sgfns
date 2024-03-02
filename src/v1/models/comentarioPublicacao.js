const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const usuario = require("./usuario");
const publicacoes = require("./publicacao");

const comentariosPublicacao = sequelize.define("ComentariosPublicacao", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comentario: {
    type: DataTypes.TEXT,
  },
});

usuario.hasMany(comentariosPublicacao, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
comentariosPublicacao.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

publicacoes.hasMany(comentariosPublicacao, {
  foreignKey: "fk_publicacao",
  sourceKey: "id",
});
comentariosPublicacao.belongsTo(publicacoes, {
  foreignKey: "fk_publicacao",
  targetId: "id",
});

module.exports = comentariosPublicacao;
