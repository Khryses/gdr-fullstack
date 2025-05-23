
const express = require("express");
const router = express.Router();
const controller = require("../controllers/votoController");
const auth = require("../middleware/auth");

router.post("/", auth, controller.sendVote);
router.get("/", auth, controller.getVotes);

module.exports = router;
