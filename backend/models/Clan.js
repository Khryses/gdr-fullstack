
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Clan = sequelize.define("Clan", {
  nome: DataTypes.STRING,
  descrizione: DataTypes.TEXT,
  fondatoreId: DataTypes.INTEGER
});

module.exports = Clan;
