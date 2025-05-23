
const express = require("express");
const router = express.Router();
const controller = require("../controllers/eventController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

router.get("/", auth, controller.getEvents);
router.post("/", auth, checkRole("master"), controller.createEvent);

module.exports = router;
