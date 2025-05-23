const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cognome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  razza: { type: DataTypes.STRING, allowNull: false },
  forza: { type: DataTypes.INTEGER, defaultValue: 1 },
  carisma: { type: DataTypes.INTEGER, defaultValue: 1 },
});

module.exports = User;