const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  fuelType: {
    type: Sequelize.ENUM('Gas', 'Diesel', 'Electric'),
    defaultValue: 'Electric'
  },

  fuelLevel: {
    type: Sequelize.DECIMAL,
    validate: {
      max: 100,
      min: 0
    },
    defaultValue: 100
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: '/newRobot.png'
  }
});