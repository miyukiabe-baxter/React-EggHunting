'use strict'

const db = require('../server/db')
const {Egg, Quiz} = require('../server/db/models')

const eggs = [
  {
    imageUrl: '/img/blue.png',
    difficulty: 'easy'
  },
  {
    imageUrl: '/img/orange.png',
    difficulty: 'medium'
  },
  {
    imageUrl: '/img/red.png',
    difficulty: 'hard'
  },
  {
    imageUrl: '/img/special.png',
    difficulty: 'special'
  }
]

const quizzes = [
  {
    category: 'Science: Computers',
    correct_answer: 'Serbia',
    difficulty: 'medium',
    incorrect_answers: ['Romania', 'Russia', 'Rwanda'],
    question: '.rs is the top-level domain for what country?',
    type: 'multiple'
  }
]

// const Quiz = db.define('quiz', {
//   category: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   correct_answer: {
//     type: Sequelize.STRING
//   },
//   difficulty: {
//     type: Sequelize.STRING,
//     validate: {
//       isIn: [['easy', 'medium', 'hard']]
//     }
//   },
//   incorrect_answers: {
//     type: Sequelize.ARRAY(Sequelize.TEXT)
//   },
//   question: {
//     type: Sequelize.TEXT
//   },
//   type: {
//     type: Sequelize.STRING,
//     validate: {
//       isIn: [['multiple', 'boolean']]
//     }
//   }
// })

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Egg.bulkCreate(eggs)
  await Quiz.bulkCreate(quizzes)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
