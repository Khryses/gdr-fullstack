const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connesso a MongoDB');
  } catch (err) {
    console.error('❌ Errore di connessione MongoDB:', err);
    process.exit(1);
  }
}

module.exports = connectDB;