const router = require('express').Router();
const { Bank } = require('../db/models');

router.get('/', async(req, res, next) => {
  try {
    const banks = await Bank.findAll();
    if(banks) res.json(banks);
    else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
