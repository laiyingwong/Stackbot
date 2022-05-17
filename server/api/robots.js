const robotRouter = require('express').Router()
const Robot = require('../db/robot')

robotRouter.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots)
  } catch (err) {
    next(err)
  }
})

module.exports = robotRouter