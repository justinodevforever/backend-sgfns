const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const usuario = require("./usuario");

const image = sequelize.define("Images", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
  legenda: {
    type: DataTypes.STRING,
  },
});

usuario.hasMany(image, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
image.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});

module.exports = image;
