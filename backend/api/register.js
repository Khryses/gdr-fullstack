
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const utenti = [];
const messaggiInLand = [];

function generatePassword() {
  return crypto.randomBytes(6).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 10);
}

function isNameValid(name) {
  const invalidNames = ["Harry Potter", "Darth Vader", "Gandalf"];
  const hasSymbols = /[^a-zA-Z]/.test(name);
  return !hasSymbols && !invalidNames.includes(name);
}

router.post("/", async (req, res) => {
  const { nome, cognome, email, razza, caratteristiche } = req.body;

  if (!isNameValid(nome) || !isNameValid(cognome)) {
    return res.status(400).json({ error: "Nome o cognome non validi o coperti da copyright." });
  }

  const password = generatePassword();

  const nuovoUtente = {
    nome,
    cognome,
    email,
    razza,
    caratteristiche,
    password,
    dataIscrizione: new Date()
  };
  utenti.push(nuovoUtente);

  messaggiInLand.push({
    destinatario: email,
    titolo: "Benvenuto su Eodum",
    testo: "Hai ricevuto la tua password via email. Ti consigliamo di cambiarla al primo accesso dal tuo profilo.",
    data: new Date()
  });

  try {
    const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
    if (smtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: '"Eodum GDR" <noreply@eodum.com>',
        to: email,
        subject: "Benvenuto su Eodum – La tua password",
        text: `Ciao ${nome},

la tua password temporanea è: ${password}

Ti invitiamo a cambiarla subito dopo il primo accesso.

Buon gioco!`
      });
    } else {
      console.log(`[DEBUG] SMTP non configurato. Password generata per ${email}: ${password}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Errore nell'invio email." });
  }
});

module.exports = router;
