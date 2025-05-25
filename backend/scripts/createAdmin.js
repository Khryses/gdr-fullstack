
const bcrypt = require("bcrypt");
const { User } = require("../models");
const sequelize = require("../config/database");

(async () => {
  try {
    await sequelize.sync();

    const existing = await User.findOne({ where: { email: "admin@eodum.gdr" } });
    if (existing) {
      console.log("✅ Utente admin già esistente.");
      process.exit(0);
    }

    const user = await User.create({
      nome: "Admin",
      cognome: "Root",
      email: "admin@eodum.gdr",
      password: "$2b$12$UmOgCqg0eyNZTSYVlDNBR.3C7gNlKpI2wW4fKfm7bFJkqC.GLvBPO",
      ruolo: "admin",
      livello: 5,
      reputazione: 100,
      mustChangePassword: false
    });

    console.log("✅ Admin creato con successo:", user.email);
    process.exit(0);
  } catch (err) {
    console.error("❌ Errore nella creazione dell'admin:", err);
    process.exit(1);
  }
})();
