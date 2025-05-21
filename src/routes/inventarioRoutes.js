
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const inventarioController = require('../controllers/inventarioController');

router.post('/inventario', authMiddleware, isMaster, inventarioController.aggiungiOggetto);
router.get('/inventario/:characterId', authMiddleware, inventarioController.getInventario);
router.patch('/inventario/:id', authMiddleware, isMaster, inventarioController.modificaOggetto);
router.delete('/inventario/:id', authMiddleware, isMaster, inventarioController.eliminaOggetto);

router.post('/inventario/trasferisci', authMiddleware, isMaster, inventarioController.trasferisciOggetto);
router.patch('/inventario/monete', authMiddleware, isMaster, inventarioController.modificaMonete);

module.exports = router;
