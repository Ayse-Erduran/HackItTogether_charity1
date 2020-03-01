const Sequelize = require('sequelize')
const db = require('../db.js')

const Account = db.define('account', {
  accountType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  accountNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  currentBalance: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0
    }
  }
})

module.exports = Account;
