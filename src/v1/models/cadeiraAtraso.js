const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const Estudante = require("./estudante");
const Cursos = require("./cursos");
const Semestre = require("./semestre");
const AnoFrequencia = require("./anoFrequencia");
const Disciplina = require("./disciplina");
const AnoLetivo = require("./anoLetivo");

const CadeiraAtraso = sequelize.define(
  "CadeiraAtraso",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valor: {
      type: DataTypes.INTEGER,
    },
    data: {
      type: DataTypes.DATE,
    },
    rupe: {
      type: DataTypes.BIGINT,
    },
  },
  { timestemps: false }
);

Estudante.hasMany(CadeiraAtraso, {
  foreignKey: "fk_estudante",
  sourceKey: "id",
});
CadeiraAtraso.belongsTo(Estudante, {
  foreignKey: "fk_estudante",
  targetId: "id",
});
Cursos.hasMany(CadeiraAtraso, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});
CadeiraAtraso.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
Semestre.hasMany(CadeiraAtraso, {
  foreignKey: "fk_semestre",
  sourceKey: "id",
});
CadeiraAtraso.belongsTo(Semestre, {
  foreignKey: "fk_semestre",
  targetId: "id",
});
AnoFrequencia.hasMany(CadeiraAtraso, {
  foreignKey: "fk_frequencia",
  sourceKey: "id",
});
CadeiraAtraso.belongsTo(AnoFrequencia, {
  foreignKey: "fk_frequencia",
  targetId: "id",
});
Disciplina.hasMany(CadeiraAtraso, {
  foreignKey: "fk_disciplina",
  sourceKey: "id",
});
CadeiraAtraso.belongsTo(Disciplina, {
  foreignKey: "fk_disciplina",
  targetId: "id",
});
AnoLetivo.hasMany(CadeiraAtraso, {
  foreignKey: "fk_ano",
  sourceKey: "id",
});
CadeiraAtraso.belongsTo(AnoLetivo, {
  foreignKey: "fk_ano",
  targetId: "id",
});

module.exports = CadeiraAtraso;
