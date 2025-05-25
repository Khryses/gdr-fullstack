
const bcrypt = require("bcrypt");
const { User } = require("../models");
const sequelize = require("../config/database");

(async () => {
  try {
    await sequelize.sync();

    await User.destroy({ where: { email: "admin@eodum.gdr" } });
    console.log("ℹ️ Utente admin precedente eliminato (se esisteva)");

    const user = await User.create({
      nome: "Admin",
      cognome: "Root",
      email: "admin@eodum.gdr",
      password: "$2b$12$K.20G5WRP/tZLwTj9GAhKeeoeWufraPwhRUn.WNijLCkamnl3qryu",
      ruolo: "admin",
      livello: 5,
      reputazione: 100,
      mustChangePassword: false
    });

    console.log("✅ Admin ricreato con successo:", user.email);
    process.exit(0);
  } catch (err) {
    console.error("❌ Errore nella creazione/reset dell'admin:", err);
    process.exit(1);
  }
})();
