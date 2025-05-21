
const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin, isMaster } = require('../middlewares/authMiddleware');

const notifiche = require('../controllers/notificheController');
const sessioni = require('../controllers/sessioniController');
const ticket = require('../controllers/ticketController');
const blacklist = require('../controllers/blacklistController');
const quest = require('../controllers/questController');
const bacheca = require('../controllers/bachecaController');
const inventario = require('../controllers/inventarioController');
const admin = require('../controllers/adminController');

router.get('/notifiche', authMiddleware, notifiche.getNotifiche);
router.get('/sessioni', authMiddleware, sessioni.getSessioni);
router.get('/ticket', authMiddleware, isMaster, ticket.getTicket);
router.get('/blacklist', authMiddleware, blacklist.getBlacklist);
router.get('/quests', authMiddleware, quest.getQuests);
router.get('/bacheca', authMiddleware, bacheca.getPostBacheca);
router.get('/inventario', authMiddleware, inventario.getInventario);

router.post('/admin/ban/:id', authMiddleware, isAdmin, admin.bannaUtente);

module.exports = router;
