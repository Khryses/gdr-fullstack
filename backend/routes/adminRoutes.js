
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

router.get("/dashboard", auth, checkRole("master"), adminController.getAdminDashboard);

module.exports = router;
