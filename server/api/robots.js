const robotRouter = require('express').Router()
const Robot = require('../db/robot')
const Project = require('../db/project')

// GET /api/robots/
robotRouter.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots)
  } catch (err) {
    next(err)
  }
})

// POST api/robots/
robotRouter.post('/', async (req, res, next) => {
  try {
    const newRobot = await Robot.create(req.body);
    res.json(newRobot)
  } catch (err) {
    next(err);
  }
});

// GET /api/robots/:robotId
robotRouter.get('/:robotId', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.robotId, {
      include: Project
    });
    res.json(robot)

  } catch (err) {
    next(err)
  }
})

// PUT /api/robots/:robotId
robotRouter.put('/:robotId', async (req, res, next) => {
  try {
    const robotToUpdate = await Robot.findByPk(req.params.robotId);
    res.send(await robotToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/robots/:robotId/unassign-project
robotRouter.put('/:robotId/unassign-project', async (req, res, next) => {
  try {

    const robot = await Robot.findByPk(req.params.robotId, {
      include: Project
    });
    await robot.removeProject(req.body.id);
    res.send(await Project.findByPk(req.body.id));

  } catch (error) {
    next(error);
  }
})

// DELETE /api/robots/:robotId
robotRouter.delete('/:robotId', async (req, res, next) => {
  try {
    await Robot.destroy({where: {id: req.params.robotId}});
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = robotRouter