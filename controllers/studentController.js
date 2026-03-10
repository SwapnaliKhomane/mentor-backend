const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create({
      name: req.body.name,
      age: req.body.age,
      parent: req.user.id
    });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getStudents = async (req, res) => {
  const students = await Student.find({ parent: req.user.id });
  res.json(students);
};