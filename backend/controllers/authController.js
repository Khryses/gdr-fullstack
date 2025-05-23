
const bcrypt = require('bcrypt');
const { User } = require('../models');
const generatePassword = require('../utils/generatePassword');
const sendMail = require('../utils/sendMail');

exports.register = async (req, res) => {
  try {
    const { nome, cognome, sesso, razza, email, caratteristiche } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email già registrata.' });
    }

    const plainPassword = generatePassword();
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const newUser = await User.create({
      nome,
      cognome,
      sesso,
      razza,
      email,
      password: hashedPassword,
      caratteristiche,
      mustChangePassword: true
    });

    await sendMail(
      email,
      'Registrazione completata - GDR Eodum',
      `Benvenuto/a ${nome},

La tua password temporanea è: ${plainPassword}

Ti invitiamo a cambiarla al primo accesso.

Buon gioco!`
    );

    res.status(201).json({ message: 'Registrazione completata. Controlla la tua email.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Errore durante la registrazione.' });
  }
};
