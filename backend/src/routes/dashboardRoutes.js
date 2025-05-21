
const express = require('express');
const router = express.Router();
const { authMiddleware, isMaster } = require('../middlewares/authMiddleware');
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard/admin', authMiddleware, isMaster, dashboardController.getDashboard);

module.exports = router;
