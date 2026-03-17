'use strict'

const express = require('express');
const padresControllers = require('../controllers/padreControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getPadres', async (req, res) => await padresControllers.findAll(req, res))
.post('/insertPadre', async (req, res) => await padresControllers.findAll(req, res))
.put('/updatePadre', async (req, res) => await padresControllers.findAll(req, res));

module.exports = apiRoutes;