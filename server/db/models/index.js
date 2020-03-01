const User = require('./user.js')
const db = require('../db.js')
const Account = require('./account.js')
const Bank = require('./bank.js')
const Charity = require('./charity.js')


//define relations between models here
Bank.hasMany(Account)
Account.belongsTo(Bank, {
  foreignKey: 'bankId'
})
User.hasMany(Account);
Account.belongsTo(User, {foreignKey: 'userId'})

const UserCharity = db.define('UserCharity')

User.belongsToMany(Charity, {through: UserCharity});

Charity.belongsToMany(User, {through: UserCharity});

Charity.hasMany(Account);
Account.belongsTo(Charity, { foreignKey: 'charityId'})

module.exports = {
  User,
  Account,
  Bank,
  Charity,
  UserCharity,
  db
}
