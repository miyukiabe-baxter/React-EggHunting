const Sequelize = require('sequelize')
const db = require('../db')

const Egg = db.define('egg', {
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/img/special.png'
  },
  difficulty: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['easy', 'medium', 'hard', 'special']]
    },
    defaultValue: 'special'
  }
})

module.exports = Egg
