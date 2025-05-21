
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const characterController = require('../controllers/characterController');

router.patch('/characters/online', authMiddleware, isMaster, characterController.aggiornaOnline);
router.patch('/characters/posizione', authMiddleware, isMaster, characterController.aggiornaPosizione);

module.exports = router;
