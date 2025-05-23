
const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

router.get("/", auth, controller.getAllItems);
router.post("/", auth, checkRole("master"), controller.createItem);
router.put("/:id", auth, checkRole("master"), controller.updateItem);
router.delete("/:id", auth, checkRole("master"), controller.deleteItem);

module.exports = router;
