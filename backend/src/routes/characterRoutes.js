const express = require('express');
const router = express.Router();
const controller = require('../controllers/characterController');

router.post('/online', controller.aggiornaOnline);
router.post('/posizione', controller.aggiornaPosizione);

module.exports = router;