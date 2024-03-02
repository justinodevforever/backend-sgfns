const Sequelize = require("sequelize");
require("dotenv");

const sequelize = new Sequelize(
  process.env.BD_DATABASE,
  process.env.BD_USERNAME,
  process.env.BB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.BD_USERNAME,
  }
);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
