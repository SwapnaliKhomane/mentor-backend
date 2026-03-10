const router = require("express").Router();
const { jwtMiddleware } = require("../middleware/authMiddleware");
const { createLesson, getLessons } = require("../controllers/lessonController");

router.post("/", jwtMiddleware, createLesson);
router.get("/", jwtMiddleware, getLessons);

module.exports = router;