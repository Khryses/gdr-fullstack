
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Voto = sequelize.define("Voto", {
  daUserId: DataTypes.INTEGER,
  aUserId: DataTypes.INTEGER,
  valore: DataTypes.INTEGER, // +1 o -1
  motivo: DataTypes.TEXT
});

module.exports = Voto;
