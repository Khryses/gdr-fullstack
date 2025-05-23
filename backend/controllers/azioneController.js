
const Azione = require("../models/Azione");

exports.getLog = async (req, res) => {
  const log = await Azione.findAll({ where: { userId: req.user.id }, order: [["timestamp", "DESC"]] });
  res.json(log);
};

exports.addLog = async (req, res) => {
  const entry = await Azione.create({ ...req.body, userId: req.user.id });
  res.status(201).json(entry);
};
