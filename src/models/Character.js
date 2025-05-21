const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  race: String,
  role: String,
  avatar: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Character', characterSchema);