const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const Disciplina = require("./disciplina");
const Cursos = require("./cursos");
const AnoFrequencia = require("./anoFrequencia");

const CursoFrequencia = sequelize.define("CursoFrequencia", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
AnoFrequencia.hasMany(CursoFrequencia, {
  foreignKey: "fk_ano",
  sourceKey: "id",
});
CursoFrequencia.belongsTo(AnoFrequencia, {
  foreignKey: "fk_ano",
  targetId: "id",
});

Cursos.hasMany(CursoFrequencia, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});
CursoFrequencia.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
module.exports = CursoFrequencia;
