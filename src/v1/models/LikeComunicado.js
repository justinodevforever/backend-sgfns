const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const usuario = require("./usuario");

const likeComunicado = sequelize.define("LikeCominicado", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  like: {
    type: DataTypes.BOOLEAN,
  },
});

usuario.hasMany(likeComunicado, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
likeComunicado.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = likeComunicado;
