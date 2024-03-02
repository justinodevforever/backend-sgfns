const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const UsuarioSistema = require("./UsuarioSistema");
const permissao = require("./permissao");
const usuario = require("./usuario");

const UsuarioPermissoes = sequelize.define("UsuarioPermissoes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

usuario.hasMany(UsuarioPermissoes, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
UsuarioPermissoes.belongsTo(usuario, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
permissao.hasMany(UsuarioPermissoes, {
  foreignKey: "fk_permissao",
  sourceKey: "id",
});
UsuarioPermissoes.belongsTo(permissao, {
  foreignKey: "fk_permissao",
  sourceKey: "id",
});

module.exports = UsuarioPermissoes;
