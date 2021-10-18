const express = require('express');
const routes = express.Router();

const OngController = require('./database/controllers/OngController');
const IncidentsController = require('./database/controllers/IncidentController');
const ProfileController = require('./database/controllers/ProfileController');
const SessionController = require('./database/controllers/SessionController')

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;  