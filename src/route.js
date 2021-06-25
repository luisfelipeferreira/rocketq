const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}));
route.get('/room/:room', (req, res) => res.render('room'));
route.get('/create-room', (req, res) => res.render('index', {page: 'create-room'}));

// Formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', questionController.index);
route.post('/create-pass', roomController.create)

module.exports = route;