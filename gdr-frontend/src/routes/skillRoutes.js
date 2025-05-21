
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const skillController = require('../controllers/skillController');

router.post('/skills', authMiddleware, skillController.addSkill);
router.put('/skills/:id', authMiddleware, skillController.upgradeSkill);

module.exports = router;
