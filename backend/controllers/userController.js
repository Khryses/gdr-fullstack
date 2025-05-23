
const User = require("../models/User");

exports.getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: "Utente non trovato" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Errore server" });
  }
};
