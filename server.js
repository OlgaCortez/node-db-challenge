const express = require('express');
const helmet = require('helmet');
const server = express();
const router = require('./data/projects/project-router');

server.use(helmet());
server.use(express.json());

server.use('/api/projects', router);

server.get('/', (req, res) => {
    res.send('<h1>Project API</h1>')
})

module.exports = server;