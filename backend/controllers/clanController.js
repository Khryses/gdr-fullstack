
const Clan = require("../models/Clan");

exports.getAllClans = async (req, res) => {
  const clans = await Clan.findAll();
  res.json(clans);
};

exports.createClan = async (req, res) => {
  const clan = await Clan.create({ ...req.body, fondatoreId: req.user.id });
  res.status(201).json(clan);
};
