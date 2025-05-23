
const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");
const auth = require("../middleware/auth");

router.get("/", auth, controller.getAllPosts);
router.post("/", auth, controller.createPost);

module.exports = router;
