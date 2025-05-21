const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  race: String,
  role: String,
  avatar: String,
  posizione: String,
  online: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Character', characterSchema);