const Sequelize = require('sequelize')
const db = require('../db.js')

const Bank = db.define('bank', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  routingNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

module.exports = Bank;
