
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email richiesta" });

  // Simulazione invio email
  console.log(`Simulazione invio reset password a: ${email}`);

  // Qui potresti salvare un token nel DB e mandare il link
  return res.status(200).json({ success: true });
});

module.exports = router;
