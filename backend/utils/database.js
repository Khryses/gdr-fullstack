const { Sequelize } = require('sequelize');
require('dotenv').config(); // Questo carica il file .env

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Database connesso'))
  .catch((err) => console.log('Errore connessione database:', err));

module.exports = sequelize;
