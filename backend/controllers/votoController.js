
const Voto = require("../models/Voto");

exports.sendVote = async (req, res) => {
  const voto = await Voto.create({ ...req.body, daUserId: req.user.id });
  res.status(201).json(voto);
};

exports.getVotes = async (req, res) => {
  const ricevuti = await Voto.findAll({ where: { aUserId: req.user.id } });
  res.json(ricevuti);
};
