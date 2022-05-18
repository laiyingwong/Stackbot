const projectRouter = require('express').Router()
const Project = require('../db/project')

// GET /api/projects/
projectRouter.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

// GET /api/projects/:projectId
projectRouter.get('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    res.json(project)
  } catch (err) {
    next(err)
  }
})

module.exports = projectRouter