
const MapButton = require("../models/MapButton");

exports.getMap = async (req, res) => {
  const buttons = await MapButton.findAll();
  res.json(buttons);
};

exports.updateButton = async (req, res) => {
  const button = await MapButton.findByPk(req.params.id);
  if (!button) return res.status(404).json({ error: "Bottone non trovato" });
  await button.update(req.body);
  res.json(button);
};
