const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const Professor = require("./professor");
const Cursos = require("./cursos");
const AnoFrequencia = require("./anoFrequencia");
const Semestre = require("./semestre");
const AnoLetivo = require("./anoLetivo");

const Disciplina = sequelize.define(
  "Disciplina",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
  },
  { timestemps: false }
);

Cursos.hasMany(Disciplina, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});
Disciplina.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
AnoFrequencia.hasMany(Disciplina, {
  foreignKey: "fk_ano",
  sourceKey: "id",
});
Disciplina.belongsTo(AnoFrequencia, {
  foreignKey: "fk_ano",
  targetId: "id",
});
Semestre.hasMany(Disciplina, {
  foreignKey: "fk_semestre",
  sourceKey: "id",
});
Disciplina.belongsTo(Semestre, {
  foreignKey: "fk_semestre",
  targetId: "id",
});

module.exports = Disciplina;
