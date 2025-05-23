
const sequelize = require('../backend/config/database');
const User = require('../backend/models/User');
const Item = require('../backend/models/Item');
const Inventory = require('../backend/models/Inventory');
const MapButton = require('../backend/models/MapButton');

async function init() {
  await sequelize.sync({ force: true });

  // Admin
  await User.create({
    nome: 'Admin',
    cognome: 'Master',
    email: 'admin@eodum.gdr',
    password: '$2b$10$XXXXXXXXXXXXXXXXXXXXXX', // placeholder bcrypt
    ruolo: 'admin',
    livello: 10,
    reputazione: 100
  });

  // Oggetti base
  await Item.bulkCreate([
    { nome: 'Pozione', descrizione: 'Cura 20 HP', prezzo: 10, tipo: 'consumabile', quantita: 100 },
    { nome: 'Spada Base', descrizione: 'Arma di base', prezzo: 30, tipo: 'arma', quantita: 10 }
  ]);

  // Mappa iniziale
  await MapButton.bulkCreate([
    { nome: 'Barrio del Sol', x: 50, y: 80, link: '/quartieri/barrio', quartiere: 'Barrio del Sol' },
    { nome: 'Sanctuary', x: 120, y: 200, link: '/quartieri/sanctuary', quartiere: 'Sanctuary' }
  ]);

  console.log("Database inizializzato con dati base.");
}

init();
