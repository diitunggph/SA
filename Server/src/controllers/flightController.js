const Flight = require('../models/flightModel');

exports.searchFlights = async (req, res) => {
  const { startAirport, endAirport, date } = req.query;
  try {
    const flights = await Flight.findAll({ where: { startAirport, endAirport, date } });
    res.json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
