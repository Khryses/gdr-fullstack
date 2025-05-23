
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Razza = sequelize.define("Razza", {
  nome: DataTypes.STRING,
  poteri: DataTypes.JSON
});

module.exports = Razza;
