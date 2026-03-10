const router = require("express").Router();
const { jwtMiddleware } = require("../middleware/authMiddleware");
const { createSession, getSessionsByLesson } = require("../controllers/sessionController");

router.post("/", jwtMiddleware, createSession);
router.get("/lessons/:lessonId/sessions", jwtMiddleware, getSessionsByLesson);

module.exports = router;