const Booking = require('../models/bookingModel');
const Flight = require('../models/flightModel');

exports.bookTicket = async (req, res) => {
  const { flightId, passengers, contactInfo } = req.body;
  try {
    const flight = await Flight.findByPk(flightId);
    if (!flight || flight.availableSeats < passengers.length) {
      return res.status(400).json({ msg: 'Not enough seats available' });
    }

    await Booking.create({ flightId, passengers, contactInfo });
    flight.availableSeats -= passengers.length;
    await flight.save();

    res.json({ status: 'success', bookingId: booking.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
