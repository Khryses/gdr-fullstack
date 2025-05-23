
const Razza = require("../models/Razza");

exports.getRazze = async (req, res) => {
  const razze = await Razza.findAll();
  res.json(razze);
};

exports.createRazza = async (req, res) => {
  const nuova = await Razza.create(req.body);
  res.status(201).json(nuova);
};
