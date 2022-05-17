const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  deadline: {
    type: Sequelize.DATE
  },

  priority: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
      min: 1
    }
  },

  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  description: {
    type: Sequelize.TEXT
  }
});