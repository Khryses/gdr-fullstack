
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  nome: { type: DataTypes.STRING, allowNull: false },
  cognome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  ruolo: { type: DataTypes.STRING, defaultValue: "giocatore" },
  livello: { type: DataTypes.INTEGER, defaultValue: 1 },
  reputazione: { type: DataTypes.INTEGER, defaultValue: 0 },
  mustChangePassword: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = User;
