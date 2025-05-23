
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Inventory = sequelize.define("Inventory", {
  userId: DataTypes.INTEGER,
  itemId: DataTypes.INTEGER,
  quantita: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Inventory;
