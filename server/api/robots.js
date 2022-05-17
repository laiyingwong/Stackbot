const robotRouter = require('express').Router()
const Robot = require('../db/robot')

// GET /api/robots/
robotRouter.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots)
  } catch (err) {
    next(err)
  }
})

// GET /api/robots/:robotId
robotRouter.get('/:robotId', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.robotId);
    res.json(robot)
  } catch (err) {
    next(err)
  }
})

module.exports = robotRouter