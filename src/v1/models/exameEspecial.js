const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const Estudante = require("./estudante");
const Cursos = require("./cursos");
const Semestre = require("./semestre");
const AnoFrequencia = require("./anoFrequencia");
const Disciplina = require("./disciplina");
const AnoLetivo = require("./anoLetivo");

const ExameEspecial = sequelize.define(
  "ExameEspecial",
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
  { timestamps: false }
);

Estudante.hasMany(ExameEspecial, {
  foreignKey: "fk_estudante",
  sourceKey: "id",
});
ExameEspecial.belongsTo(Estudante, {
  foreignKey: "fk_estudante",
  targetId: "id",
});
Cursos.hasMany(ExameEspecial, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});
ExameEspecial.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
Semestre.hasMany(ExameEspecial, {
  foreignKey: "fk_semestre",
  sourceKey: "id",
});
ExameEspecial.belongsTo(Semestre, {
  foreignKey: "fk_semestre",
  targetId: "id",
});
AnoFrequencia.hasMany(ExameEspecial, {
  foreignKey: "fk_frequencia",
  sourceKey: "id",
});
ExameEspecial.belongsTo(AnoFrequencia, {
  foreignKey: "fk_frequencia",
  targetId: "id",
});
Disciplina.hasMany(ExameEspecial, {
  foreignKey: "fk_disciplina",
  sourceKey: "id",
});
ExameEspecial.belongsTo(Disciplina, {
  foreignKey: "fk_disciplina",
  targetId: "id",
});
AnoLetivo.hasMany(ExameEspecial, {
  foreignKey: "fk_ano",
  sourceKey: "id",
});
ExameEspecial.belongsTo(AnoLetivo, {
  foreignKey: "fk_ano",
  targetId: "id",
});
module.exports = ExameEspecial;
