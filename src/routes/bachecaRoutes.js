
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const bachecaController = require('../controllers/bachecaController');

router.post('/bacheca', authMiddleware, bachecaController.creaPost);
router.get('/bacheca', authMiddleware, bachecaController.getPostBacheca);
router.delete('/bacheca/:id', authMiddleware, bachecaController.eliminaPost);

router.get('/bacheca/tipo/:tipo', authMiddleware, bachecaController.getBachecaTipo);

router.post('/bacheca/:id/commenti', authMiddleware, bachecaController.aggiungiCommento);
router.get('/bacheca/:id/commenti', authMiddleware, bachecaController.getCommenti);
router.get('/bacheca/:id/visualizza', authMiddleware, bachecaController.visualizzaPost);
router.patch('/bacheca/:id', authMiddleware, bachecaController.modificaPost);

module.exports = router;
