const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const AnoLetivo = require("./anoLetivo");
const AnoFrequencia = require("./anoFrequencia");
const usuario = require("./usuario");
const Estudante = require("./estudante");
const Semestre = require("./semestre");
const Cursos = require("./cursos");

const Reconfirmacao = sequelize.define(
  "Reconfirmacao",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ano: {
      type: DataTypes.DATE,
      unique: true,
    },
    valor: {
      type: DataTypes.DOUBLE,
    },
    rupe: {
      type: DataTypes.INTEGER,
    },
  },
  { timestemps: true }
);
AnoLetivo.hasMany(Reconfirmacao, {
  foreignKey: "fk_anoLetivo",
  sourceKey: "id",
});

Reconfirmacao.belongsTo(AnoLetivo, {
  foreignKey: "fk_anoLetivo",
  targetId: "id",
});
AnoFrequencia.hasMany(Reconfirmacao, {
  foreignKey: "fk_anoFrequencia",
  sourceKey: "id",
});

Reconfirmacao.belongsTo(AnoFrequencia, {
  foreignKey: "fk_anoFrequencia",
  targetId: "id",
});
usuario.hasMany(Reconfirmacao, {
  foreignKey: "fk_user",
  sourceKey: "id",
});

Reconfirmacao.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});
Estudante.hasMany(Reconfirmacao, {
  foreignKey: "fk_estudante",
  sourceKey: "id",
});

Reconfirmacao.belongsTo(Estudante, {
  foreignKey: "fk_estudante",
  targetId: "id",
});
Semestre.hasMany(Reconfirmacao, {
  foreignKey: "fk_semestre",
  sourceKey: "id",
});

Reconfirmacao.belongsTo(Semestre, {
  foreignKey: "fk_semestre",
  targetId: "id",
});
Cursos.hasMany(Reconfirmacao, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});

Reconfirmacao.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
module.exports = Reconfirmacao;
