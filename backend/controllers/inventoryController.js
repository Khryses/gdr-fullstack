
const Inventory = require("../models/Inventory");

exports.getInventory = async (req, res) => {
  const items = await Inventory.findAll({ where: { userId: req.user.id } });
  res.json(items);
};

exports.addItem = async (req, res) => {
  const { itemId } = req.body;
  let inv = await Inventory.findOne({ where: { userId: req.user.id, itemId } });
  if (inv) {
    inv.quantita += 1;
    await inv.save();
  } else {
    inv = await Inventory.create({ userId: req.user.id, itemId });
  }
  res.status(201).json(inv);
};
