const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      student: req.body.studentId,
      lesson: req.body.lessonId,
      parent: req.user.id
    });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};