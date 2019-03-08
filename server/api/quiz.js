const router = require('express').Router()
const {Quiz, Egg} = require('../db/models')

module.exports = router

router.get('/:level', async (req, res, next) => {
  let level = req.params.level
  try {
    if (level === 'all') {
      const allQuizzes = await Quiz.findAll({
        include: [{model: Egg}]
      })
      res.json(allQuizzes)
    } else {
      const quizzes = await Quiz.findAll({
        where: {difficulty: level},
        include: [{model: Egg}]
      })
      res.json(quizzes)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const seed = await Quiz.bulkCreate(req.body)
    res.json(seed)
  } catch (error) {
    console.error(error)
  }
})
