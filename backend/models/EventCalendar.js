
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EventCalendar = sequelize.define("EventCalendar", {
  titolo: DataTypes.STRING,
  descrizione: DataTypes.TEXT,
  dataEvento: DataTypes.DATE
});

module.exports = EventCalendar;
