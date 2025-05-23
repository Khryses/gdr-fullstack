
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define("Event", {
  titolo: DataTypes.STRING,
  descrizione: DataTypes.TEXT,
  autoreId: DataTypes.INTEGER
});

module.exports = Event;
