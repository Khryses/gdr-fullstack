
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const transazioniController = require('../controllers/transazioniController');

router.post('/transazioni', authMiddleware, transazioniController.effettuaTransazione);
router.get('/transazioni/:characterId', authMiddleware, transazioniController.listaTransazioni);

module.exports = router;
