
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const statController = require('../controllers/statController');

router.post('/characters/:id/stats', authMiddleware, isMaster, statController.addStat);
router.put('/stats/:id', authMiddleware, isMaster, statController.updateStat);

router.put('/stats/:id/upgrade', authMiddleware, statController.upgradeStat);

module.exports = router;
