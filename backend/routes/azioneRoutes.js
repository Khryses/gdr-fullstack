
const express = require("express");
const router = express.Router();
const controller = require("../controllers/azioneController");
const auth = require("../middleware/auth");

router.get("/", auth, controller.getLog);
router.post("/", auth, controller.addLog);

module.exports = router;
