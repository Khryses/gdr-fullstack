
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const presenzaController = require('../controllers/presenzaController');

router.get('/presenze/online', authMiddleware, presenzaController.listaOnline);
router.get('/presenze/mappa', authMiddleware, presenzaController.mappaLuoghi);

module.exports = router;
