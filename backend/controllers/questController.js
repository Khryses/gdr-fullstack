
const Quest = require("../models/Quest");

exports.getQuests = async (req, res) => {
  const quests = await Quest.findAll();
  res.json(quests);
};

exports.createQuest = async (req, res) => {
  const quest = await Quest.create(req.body);
  res.status(201).json(quest);
};

exports.completeQuest = async (req, res) => {
  const quest = await Quest.findByPk(req.params.id);
  if (!quest) return res.status(404).json({ error: "Quest non trovata" });
  quest.attiva = false;
  await quest.save();
  res.json(quest);
};
