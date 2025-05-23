
const express = require("express");
const router = express.Router();
const controller = require("../controllers/razzaController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

router.get("/", auth, controller.getRazze);
router.post("/", auth, checkRole("master"), controller.createRazza);

module.exports = router;
