
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OnlineStatus = sequelize.define("OnlineStatus", {
  userId: DataTypes.INTEGER,
  lastSeen: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = OnlineStatus;
