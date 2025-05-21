
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const diceController = require('../controllers/diceController');

router.post('/dice/roll', authMiddleware, diceController.rollDice);

module.exports = router;
