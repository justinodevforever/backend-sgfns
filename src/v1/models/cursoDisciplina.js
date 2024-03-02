const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const Disciplina = require("./disciplina");
const Cursos = require("./cursos");

const CursoDisciplina = sequelize.define("CursoDisciplina", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
Disciplina.hasMany(CursoDisciplina, {
  foreignKey: "fk_disciplina",
  sourceKey: "id",
});
CursoDisciplina.belongsTo(Disciplina, {
  foreignKey: "fk_disciplina",
  targetId: "id",
});

Cursos.hasMany(CursoDisciplina, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});
CursoDisciplina.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
module.exports = CursoDisciplina;
