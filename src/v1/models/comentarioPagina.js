const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const publicacaoPagina = require("./publicacaoPagina");
const usuario = require("./usuario");

const comentarioPagina = sequelize.define("ComentarioPagina", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comentario: {
    type: DataTypes.STRING,
  },
  like: {
    type: DataTypes.INTEGER,
  },
});

publicacaoPagina.hasMany(comentarioPagina, {
  foreignKey: "fk_publicacao",
  sourceKey: "id",
});

comentarioPagina.belongsTo(publicacaoPagina, {
  foreignKey: "fk_publicacao",
  targetId: "id",
});
usuario.hasMany(comentarioPagina, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
comentarioPagina.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = comentarioPagina;
