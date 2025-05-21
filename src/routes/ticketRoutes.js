
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const ticketController = require('../controllers/ticketController');

router.post('/ticket', authMiddleware, ticketController.creaTicket);
router.get('/ticket/miei', authMiddleware, ticketController.mieiTicket);
router.get('/ticket', authMiddleware, isMaster, ticketController.tuttiTicket);
router.patch('/ticket/:id', authMiddleware, isMaster, ticketController.aggiornaStato);

router.post('/ticket/:id/commenti', authMiddleware, ticketController.aggiungiCommento);
router.get('/ticket/:id/commenti', authMiddleware, ticketController.getCommenti);

module.exports = router;
