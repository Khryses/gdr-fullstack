
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const messageController = require('../controllers/messageController');

router.post('/messages/send', authMiddleware, messageController.sendMessage);
router.get('/messages/inbox', authMiddleware, messageController.getInbox);
router.get('/messages/sent', authMiddleware, messageController.getSent);

module.exports = router;
