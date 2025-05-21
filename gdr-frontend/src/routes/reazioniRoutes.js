
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const reazioniController = require('../controllers/reazioniController');

router.post('/bacheca/reazione', authMiddleware, reazioniController.aggiungiReazione);
router.get('/bacheca/reazione/:postId', authMiddleware, reazioniController.getReazioni);

module.exports = router;
