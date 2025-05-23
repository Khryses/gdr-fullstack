
const express = require("express");
const router = express.Router();
const controller = require("../controllers/inventoryController");
const auth = require("../middleware/auth");

router.get("/", auth, controller.getInventory);
router.post("/", auth, controller.addItem);

module.exports = router;
