const router = require('express').Router()
const {Quiz, Egg} = require('../db/models')
const StatsD = require('node-dogstatsd').StatsD
const dogstatsd = new StatsD()

module.exports = router

router.get('/:level', async (req, res, next) => {
  let level = req.params.level
  dogstatsd.increment('page-views')
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
