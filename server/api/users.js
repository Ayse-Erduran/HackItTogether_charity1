const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async(req, res, next) => {
  try {
    const users = await User.findAll();
    console.log('users', users)
    if(users) res.json(users);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
