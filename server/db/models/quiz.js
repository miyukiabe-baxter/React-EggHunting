const Sequelize = require('sequelize')
const db = require('../db')

const Quiz = db.define('quiz', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  correct_answer: {
    type: Sequelize.STRING
  },
  difficulty: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['easy', 'medium', 'hard']]
    }
  },
  incorrect_answers: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  question: {
    type: Sequelize.TEXT
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['multiple', 'boolean']]
    }
  }
})

module.exports = Quiz
