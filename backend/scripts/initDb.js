
require('dotenv').config();
const sequelize = require('../config/database');
const User = require('../models/User');
const Item = require('../models/Item');
const MapButton = require('../models/MapButton');

async function init() {
  await sequelize.sync({ force: true });

  await User.create({
    nome: 'Admin',
    cognome: 'Master',
    email: 'admin@eodum.gdr',
    password: '$2b$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    ruolo: 'admin',
    livello: 10,
    reputazione: 100,
    mustChangePassword: false
  });

  await Item.create({
    nome: 'Pozione',
    descrizione: 'Cura 20HP',
    prezzo: 10,
    tipo: 'consumabile',
    quantita: 100
  });

  await MapButton.create({
    nome: 'Barrio del Sol',
    x: 100,
    y: 100,
    link: '/quartieri/barrio',
    quartiere: 'Barrio del Sol'
  });

  console.log('✅ Database inizializzato con dati base.');
}

init();
