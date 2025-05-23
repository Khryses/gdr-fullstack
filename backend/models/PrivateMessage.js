
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PrivateMessage = sequelize.define("PrivateMessage", {
  mittenteId: DataTypes.INTEGER,
  destinatarioId: DataTypes.INTEGER,
  contenuto: DataTypes.TEXT,
  letto: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = PrivateMessage;
