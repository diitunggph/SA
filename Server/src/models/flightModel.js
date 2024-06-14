const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Flight = sequelize.define('Flight', {
  startAirport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endAirport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Flight;
