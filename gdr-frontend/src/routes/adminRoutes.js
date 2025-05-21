
const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const adminController = require('../controllers/adminController');

router.post('/admin/ban/:userId', authMiddleware, isAdmin, adminController.bannaUtente);
router.patch('/admin/unban/:userId', authMiddleware, isAdmin, adminController.sbloccaUtente);
router.get('/admin/banned', authMiddleware, isAdmin, adminController.listaBannati);

module.exports = router;
