
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const logController = require('../controllers/logMasterController');

router.post('/log/azione', authMiddleware, isMaster, logController.logAzione);

module.exports = router;
