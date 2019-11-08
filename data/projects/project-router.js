const express = require('express');
const router = express.Router();
const Project = require('./project-model');

router.get('/', (req, res) => {
    Project.findProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/resources', (req, res) => {
    Project.findResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/tasks', (req, res) => {
    Project.findTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Project.findProjectById(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/resources/:id', (req, res) => {
    const id = req.params.id;
    Project.findResourceById(id)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/tasks/:id', (req, res) => {
    const id = req.params.id;
    Project.findTaskById(id)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(err => res.status(500).json({ error: err }));
})


module.exports = router;