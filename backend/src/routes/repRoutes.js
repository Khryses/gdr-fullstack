
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const repController = require('../controllers/repController');

router.post('/characters/:id/reputation', authMiddleware, isMaster, repController.addReputation);
router.get('/characters/:id/reputation/logs', authMiddleware, repController.getReputationLog);

router.put('/reputation/logs/:id', authMiddleware, isMaster, repController.updateReputationVisibility);

module.exports = router;
