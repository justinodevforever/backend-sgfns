const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const Estudante = require("./estudante");
const Cursos = require("./cursos");
const Semestre = require("./semestre");
const AnoFrequencia = require("./anoFrequencia");
const Disciplina = require("./disciplina");
const AnoLetivo = require("./anoLetivo");

const Recurso = sequelize.define(
  "Recurso",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valor: {
      type: DataTypes.INTEGER,
    },
    rupe: {
      type: DataTypes.BIGINT,
    },
    data: {
      type: DataTypes.DATE,
    },
  },
  { timestemps: false }
);

Estudante.hasMany(Recurso, {
  foreignKey: "fk_estudante",
  sourceKey: "id",
});
Recurso.belongsTo(Estudante, {
  foreignKey: "fk_estudante",
  targetId: "id",
});
Cursos.hasMany(Recurso, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});
Recurso.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
Semestre.hasMany(Recurso, {
  foreignKey: "fk_semestre",
  sourceKey: "id",
});
Recurso.belongsTo(Semestre, {
  foreignKey: "fk_semestre",
  targetId: "id",
});
AnoFrequencia.hasMany(Recurso, {
  foreignKey: "fk_frequencia",
  sourceKey: "id",
});
Recurso.belongsTo(AnoFrequencia, {
  foreignKey: "fk_frequencia",
  targetId: "id",
});
Disciplina.hasMany(Recurso, {
  foreignKey: "fk_disciplina",
  sourceKey: "id",
});
Recurso.belongsTo(Disciplina, {
  foreignKey: "fk_disciplina",
  targetId: "id",
});
AnoLetivo.hasMany(Recurso, {
  foreignKey: "fk_ano",
  sourceKey: "id",
});
Recurso.belongsTo(AnoLetivo, {
  foreignKey: "fk_ano",
  targetId: "id",
});

module.exports = Recurso;
