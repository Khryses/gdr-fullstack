
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const xpController = require('../controllers/xpController');

router.post('/characters/:id/xp', authMiddleware, isMaster, xpController.addXP);

router.get('/characters/:id/xp/logs', authMiddleware, xpController.getXPLog);

module.exports = router;
