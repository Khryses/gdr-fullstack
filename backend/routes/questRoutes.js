
const express = require("express");
const router = express.Router();
const controller = require("../controllers/questController");
const auth = require("../middleware/auth");

router.get("/", auth, controller.getQuests);
router.post("/", auth, controller.createQuest);
router.put("/:id/complete", auth, controller.completeQuest);

module.exports = router;
