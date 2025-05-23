
const OnlineStatus = require("../models/OnlineStatus");

exports.updateStatus = async (req, res) => {
  const [entry, created] = await OnlineStatus.findOrCreate({
    where: { userId: req.user.id },
    defaults: { lastSeen: new Date() }
  });
  if (!created) {
    entry.lastSeen = new Date();
    await entry.save();
  }
  res.json({ ok: true });
};

exports.getOnline = async (req, res) => {
  const fiveMinAgo = new Date(Date.now() - 5 * 60000);
  const list = await OnlineStatus.findAll({
    where: { lastSeen: { [require("sequelize").Op.gt]: fiveMinAgo } }
  });
  res.json(list);
};
