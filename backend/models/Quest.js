
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Quest = sequelize.define("Quest", {
  titolo: DataTypes.STRING,
  descrizione: DataTypes.TEXT,
  ricompensa: DataTypes.STRING,
  attiva: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Quest;
