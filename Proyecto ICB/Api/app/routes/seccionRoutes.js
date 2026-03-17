'use strict'

const express = require('express');
const seccionControllers = require = require('../controllers/seccionControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getSeccion', async (req, res) => await seccionControllers.findAll(req, res))
.post('/insertSeccion', async (req, res) => await seccionControllers.findAll(req, res))
.put('/updateSeccion', async (req, res) => await seccionControllers.findAll(req, res));
module.exports = apiRoutes;