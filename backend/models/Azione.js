
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Azione = sequelize.define("Azione", {
  userId: DataTypes.INTEGER,
  descrizione: DataTypes.TEXT,
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Azione;
