const router = require("express").Router();
const { signup, login, me } = require("../controllers/authController");
const { jwtMiddleware } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", jwtMiddleware, me);

module.exports = router;