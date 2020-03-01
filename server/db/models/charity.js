const Sequelize = require('sequelize');
const db = require('../db')

const Charity = db.define('charity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cause: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn.vox-cdn.com/thumbor/J3vYy7WxwuXGlhS9TxtrfnXCRLg=/0x0:1754x1241/1200x800/filters:focal(737x481:1017x761)/cdn.vox-cdn.com/uploads/chorus_image/image/65807400/GettyImages_1060748862.0.jpg'
  }
})

module.exports = Charity;
