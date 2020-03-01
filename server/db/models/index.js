const User = require('./user.js')
const db = require('../db.js')
const Account = require('./account.js')
const Bank = require('./bank.js')
const Charity = require('./charity.js')

//define relations between models here
Bank.hasMany(Account);
Account.belongsTo(Bank);

User.belongsToMany(Account, { through: 'UserAccount' });
Account.belongsTo(User)

User.belongsToMany(Charity, {through: 'UserCharity'});
Charity.belongsToMany(User, {through: 'UserCharity'});

Charity.belongsToMany(Account, {through: 'CharityAccount'});
Account.belongsTo(Charity)

module.exports = {
  User,
  Account,
  Bank,
  Charity,
  db
}
