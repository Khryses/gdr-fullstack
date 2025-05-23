
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Item = sequelize.define("Item", {
  nome: DataTypes.STRING,
  descrizione: DataTypes.TEXT,
  prezzo: DataTypes.INTEGER,
  tipo: DataTypes.STRING,
  quantita: DataTypes.INTEGER
});

module.exports = Item;
