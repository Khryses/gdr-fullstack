
const EventCalendar = require("../models/EventCalendar");

exports.getEvents = async (req, res) => {
  const events = await EventCalendar.findAll({ order: [["dataEvento", "ASC"]] });
  res.json(events);
};

exports.createEvent = async (req, res) => {
  const event = await EventCalendar.create(req.body);
  res.status(201).json(event);
};
