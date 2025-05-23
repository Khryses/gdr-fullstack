
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MapButton = sequelize.define("MapButton", {
  nome: DataTypes.STRING,
  x: DataTypes.INTEGER,
  y: DataTypes.INTEGER,
  link: DataTypes.STRING,
  quartiere: DataTypes.STRING
});

module.exports = MapButton;
