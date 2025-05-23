
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  nome: DataTypes.STRING,
  cognome: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  ruolo: {
    type: DataTypes.STRING,
    defaultValue: "giocatore",
  },
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
  mustChangePassword: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

module.exports = User;
