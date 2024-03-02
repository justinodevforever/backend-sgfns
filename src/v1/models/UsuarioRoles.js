const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const UsuarioSistema = require("./UsuarioSistema");
const permissao = require("./permissao");
const Roles = require("./Roles");
const usuario = require("./usuario");

const UsuarioRoles = sequelize.define("UsuarioRoles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

usuario.hasMany(UsuarioRoles, {
  foreignKey: "fk_user",
  sourceKey: "id",
});
UsuarioRoles.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});
Roles.hasMany(UsuarioRoles, {
  foreignKey: "fk_roles",
  sourceKey: "id",
});
UsuarioRoles.belongsTo(Roles, {
  foreignKey: "fk_roles",
  targetId: "id",
});

module.exports = UsuarioRoles;
