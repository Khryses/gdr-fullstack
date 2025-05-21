
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster, isAdmin } = require('../middlewares/authMiddleware');
const questController = require('../controllers/questController');

router.post('/quests', authMiddleware, isMaster, questController.creaQuest);
router.patch('/quests/:id/assign', authMiddleware, isMaster, questController.assegnaQuest);
router.patch('/quests/:id/complete', authMiddleware, questController.completaQuest);
router.get('/quests/mie', authMiddleware, questController.questAssegnate);
router.get('/quests', authMiddleware, isAdmin, questController.questTotali);

router.patch('/quests/:id', authMiddleware, isMaster, questController.aggiornaQuest);

module.exports = router;
