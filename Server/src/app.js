const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', authMiddleware, bookingRoutes);
app.use('/api/employees', authMiddleware, employeeRoutes);

module.exports = app;
