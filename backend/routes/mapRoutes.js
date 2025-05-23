
const express = require("express");
const router = express.Router();
const controller = require("../controllers/mapController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

router.get("/", auth, controller.getMap);
router.put("/:id", auth, checkRole("admin"), controller.updateButton);

module.exports = router;
