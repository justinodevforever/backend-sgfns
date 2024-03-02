const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");
const Cursos = require("./cursos");
const Estudante = require("./estudante");
const TiposServicos = require("./tiposServicos");
const usuario = require("./usuario");
const AnoFrequencia = require("./anoFrequencia");

const Servicos = sequelize.define(
  "Servicos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      unique: true,
    },
    valor: {
      type: DataTypes.DOUBLE,
    },
    dataSolicitacao: {
      type: DataTypes.DATE,
    },
    dataValidacao: {
      type: DataTypes.DATE,
    },
    formaPagamento: {
      type: DataTypes.STRING,
    },
  },

  { timestemps: true }
);
Estudante.hasMany(Servicos, {
  foreignKey: "fk_estudante",
  sourceKey: "id",
});

Servicos.belongsTo(Estudante, {
  foreignKey: "fk_estudante",
  targetId: "id",
});
Cursos.hasMany(Servicos, {
  foreignKey: "fk_curso",
  sourceKey: "id",
});

Servicos.belongsTo(Cursos, {
  foreignKey: "fk_curso",
  targetId: "id",
});
Estudante.hasMany(Servicos, {
  foreignKey: "fk_estudante",
  sourceKey: "id",
});

Servicos.belongsTo(Estudante, {
  foreignKey: "fk_estudante",
  targetId: "id",
});
TiposServicos.hasMany(Servicos, {
  foreignKey: "fk_tipo",
  sourceKey: "id",
});

Servicos.belongsTo(TiposServicos, {
  foreignKey: "fk_tipo",
  targetId: "id",
});
usuario.hasMany(Servicos, {
  foreignKey: "fk_user",
  sourceKey: "id",
});

Servicos.belongsTo(usuario, {
  foreignKey: "fk_user",
  targetId: "id",
});
AnoFrequencia.hasMany(Servicos, {
  foreignKey: "fk_anoFrequencia",
  sourceKey: "id",
});

Servicos.belongsTo(AnoFrequencia, {
  foreignKey: "fk_anoFrequencia",
  targetId: "id",
});

module.exports = Servicos;
