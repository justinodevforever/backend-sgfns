const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const usuario = require("./usuario");
const Cursos = require("./cursos");
const Estudante = require("./estudante");
const AnoLetivo = require("./anoLetivo");
const Mes = require("./mes");
const Semestre = require("./semestre");

const Propina = sequelize.define(
  "Propina",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valor: {
      type: DataTypes.DOUBLE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    rupe: {
      type: DataTypes.BIGINT,
      unique: true,
    },
  },
  { timestemps: false }
);
usuario.hasMany(Propina, {
  foreignKey: "fk_user",
  sourceKey: "id",
});

Propina.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});
Semestre.hasMany(Propina, {
  foreignKey: "fk_semestre",
  sourceKey: "id",
});

Propina.belongsTo(Semestre, {
  foreignKey: "fk_semestre",
  targetId: "id",
});
Cursos.hasMany(Propina, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});

Propina.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
Estudante.hasMany(Propina, {
  foreignKey: "fk_estudante",
  sourceKey: "id",
});

Propina.belongsTo(Estudante, {
  foreignKey: "fk_estudante",
  targetId: "id",
});
AnoLetivo.hasMany(Propina, {
  foreignKey: "fk_ano",
  sourceKey: "id",
});

Propina.belongsTo(AnoLetivo, {
  foreignKey: "fk_ano",
  targetId: "id",
});
Mes.hasMany(Propina, {
  foreignKey: "fk_mes",
  sourceKey: "id",
});

Propina.belongsTo(Mes, {
  foreignKey: "fk_mes",
  targetId: "id",
});

module.exports = Propina;
