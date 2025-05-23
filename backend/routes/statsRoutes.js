const express = require('express');
const { updateStats } = require('../controllers/statsController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.patch('/:id', authMiddleware, updateStats);

module.exports = router;