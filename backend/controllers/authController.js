
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

let activeSessions = {};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email o password mancanti." });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Utente non trovato." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Password errata." });
    }

    const existing = activeSessions[user.id];
    if (existing && existing.expireTime > Date.now()) {
      return res.status(403).json({ message: "Sessione già attiva, riprova tra poco." });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "2h" });
    const expireTime = Date.now() + 2 * 60 * 1000;

    activeSessions[user.id] = { token, expireTime };

    res.json({ token, user });
  } catch (err) {
    console.error("❌ ERRORE BACKEND LOGIN:", err);
    res.status(500).json({ message: "Errore interno al server." });
  }
};

const logout = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    delete activeSessions[decoded.id];
    res.json({ message: "Logout eseguito" });
  } catch {
    res.status(401).json({ message: "Token non valido" });
  }
};

const isSessionActive = (userId) => {
  const session = activeSessions[userId];
  return session && session.expireTime > Date.now();
};

module.exports = {
  login,
  logout,
  isSessionActive,
};
