const router = require("express").Router();

const {jwtMiddleware} = require("../middleware/authMiddleware");

const { createStudent, getStudents } = require("../controllers/studentController");

router.post("/", jwtMiddleware, createStudent);

router.get("/", jwtMiddleware, getStudents);

module.exports = router;