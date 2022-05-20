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
    defaultValue: 'https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  }
});