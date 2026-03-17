'use strict'

const express = require('express');
const maestroControllers = require('../controllers/maestroControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getMaestros', async (req, res) => await maestroControllers.findAll(req, res))
.post('/insertMaestro', async (req, res) => await maestroControllers.findAll(req, res))
.put('/updateMaestro', async (req, res) => await maestroControllers.findAll(req, res));

module.exports = apiRoutes;