const router = require('express').Router();
const { Charity } = require('../db/models');

router.get('/', async(req, res, next) => {
  try {
    const charities = await Charity.findAll();
    if(charities) res.json(charities);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
