const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create({
      title: req.body.title,
      description: req.body.description,
      mentor: req.user.id
    });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getLessons = async (req, res) => {
  const lessons = await Lesson.find().populate("mentor", "name");
  res.json(lessons);
};