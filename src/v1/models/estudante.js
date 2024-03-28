const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const usuario = require("./usuario");
const Cursos = require("./cursos");

const Estudante = sequelize.define("Estudantes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
  bi: {
    type: DataTypes.STRING,
    unique: true,
  },
  contato: {
    type: DataTypes.STRING,
    unique: true,
  },
  periodo: {
    type: DataTypes.STRING,
  },
});

usuario.hasMany(Estudante, {
  foreignKey: "fk_user",
  sourceKey: "id",
});

Estudante.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});
Cursos.hasMany(Estudante, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});

Estudante.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});

module.exports = Estudante;
