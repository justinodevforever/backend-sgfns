const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const usuario = require("./usuario");

const likePagina = sequelize.define("LikePagina", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  like: {
    type: DataTypes.BOOLEAN,
  },
});

usuario.hasMany(likePagina, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
likePagina.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});
module.exports = likePagina;
