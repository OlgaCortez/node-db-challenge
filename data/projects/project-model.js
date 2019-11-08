const db = require('../../data/db-config');

function findProjects() {
    return db('projects');
}

function findResources() {
    return db('resources');
}

function findTasks() {
    return db('tasks');
}

function findProjectById(id) {
    return db('projects')
    .where({ id })
    .first();
}

function findResourceById(id) {
    return db('resources')
    .where({ id })
    .first();
}

function findTaskById(id) {
    return db('tasks')
    .where({ id })
    .first();
}


module.exports = {
    findProjects,
    findResources,
    findTasks,
    findProjectById,
    findResourceById,
    findTaskById
}