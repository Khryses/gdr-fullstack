
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const mappaController = require('../controllers/mappaController');

router.get('/mappe', authMiddleware, mappaController.getMappe);
router.get('/mappe/:id', authMiddleware, mappaController.getMappa);
router.post('/mappe', authMiddleware, isMaster, mappaController.creaMappa);
router.post('/luoghi', authMiddleware, isMaster, mappaController.creaLuogo);

module.exports = router;
