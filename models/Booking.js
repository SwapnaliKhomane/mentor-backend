const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Booking", bookingSchema);