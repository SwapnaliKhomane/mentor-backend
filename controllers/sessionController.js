const Session = require("../models/Session");
const Lesson = require("../models/Lesson");

exports.createSession = async (req, res) => {
  try {
    const { lessonId, date, topic, summary } = req.body;

    const lesson = await Lesson.findById(lessonId);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    if (lesson.mentor.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    const session = await Session.create({ lesson: lessonId, date, topic, summary });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSessionsByLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const sessions = await Session.find({ lesson: lessonId });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};