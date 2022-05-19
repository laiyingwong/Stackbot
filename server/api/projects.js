const projectRouter = require('express').Router()
const Project = require('../db/project')
const Robot = require('../db/robot')

// GET /api/projects/
projectRouter.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

// POST api/projects/
projectRouter.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    res.json(newProject)
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:projectId
projectRouter.get('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId, {
      include: Robot
    });
    res.json(project)
  } catch (err) {
    next(err)
  }
})


// DELETE /api/projects/:projectId
projectRouter.delete('/:projectId', async (req, res, next) => {
  try {
    await Project.destroy({where: {id: req.params.projectId}});
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
module.exports = projectRouter