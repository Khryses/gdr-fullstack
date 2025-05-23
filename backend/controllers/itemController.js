
const Item = require("../models/Item");

exports.getAllItems = async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json(item);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  await item.update(req.body);
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  await item.destroy();
  res.json({ message: "Item deleted" });
};
