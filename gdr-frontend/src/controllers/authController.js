
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const generateToken = (user) => {
  return jwt.sign({ id: user.id, ruolo: user.ruolo }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

exports.register = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email già registrata.' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        username,
        ruolo: 'player',
        stato: 'attivo'
      }
    });

    const token = generateToken(user);
    res.status(201).json({ token, user: { id: user.id, username: user.username, ruolo: user.ruolo } });
  } catch (err) {
    res.status(500).json({ error: 'Errore interno.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'Utente non trovato.' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Password errata.' });

    const token = generateToken(user);
    res.status(200).json({ token, user: { id: user.id, username: user.username, ruolo: user.ruolo } });
  } catch (err) {
    res.status(500).json({ error: 'Errore interno.' });
  }
};
