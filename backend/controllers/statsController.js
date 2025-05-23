const User = require('../models/user');

exports.updateStats = async (req, res) => {
  const { id } = req.params;
  const stats = req.body;
  
  await User.update(stats, { where: { id } });
  res.send('Statistiche aggiornate con successo');
};