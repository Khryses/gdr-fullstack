
const express = require("express");
const router = express.Router();
const controller = require("../controllers/onlineController");
const auth = require("../middleware/auth");

router.post("/ping", auth, controller.updateStatus);
router.get("/", auth, controller.getOnline);

module.exports = router;
