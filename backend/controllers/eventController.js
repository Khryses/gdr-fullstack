
const Event = require("../models/Event");

exports.getEvents = async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
};

exports.createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body, autoreId: req.user.id });
  res.status(201).json(event);
};
