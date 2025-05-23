
const express = require("express");
const router = express.Router();
const controller = require("../controllers/clanController");
const auth = require("../middleware/auth");

router.get("/", auth, controller.getAllClans);
router.post("/", auth, controller.createClan);

module.exports = router;
