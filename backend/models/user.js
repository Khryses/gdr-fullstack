
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  nome: DataTypes.STRING,
  cognome: DataTypes.STRING,
  sesso: DataTypes.STRING,
  razza: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  livello: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  reputazione: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  caratteristiche: {
    type: DataTypes.JSON,
    defaultValue: {},
  },
});

module.exports = User;
