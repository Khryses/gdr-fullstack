const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.registerUser = async (req, res) => {
  const { nome, cognome, email, password, razza } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ nome, cognome, email, password: hashedPassword, razza });
  
  // Invio email password automatica (esempio)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    to: email,
    subject: "Benvenuto su Eodum",
    text: `La tua password: ${password}`
  });

  res.status(201).send(user);
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Email o password errate');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.send({ token });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  res.send(`Email di recupero inviata a ${email}`);
};