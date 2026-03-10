const router = require("express").Router();
const { jwtMiddleware } = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createBooking } = require("../controllers/bookingController");

router.post("/", jwtMiddleware, role("parent"), createBooking);

module.exports = router;