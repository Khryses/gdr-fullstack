const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Utente già registrato' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, email: user.email, role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Errore registrazione' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Utente non trovato' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Password errata' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, email: user.email, role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Errore login' });
  }
});

module.exports = router;