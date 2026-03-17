'use strict'

const express = require('express');
const gradoControllers = require('../controllers/gradoControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getGrado', async (req, res) => await gradoControllers.findAll(req, res))
.post('/insertGrado', async (req, res) => await gradoControllers.findAll(req, res))
.put('/updateGrado', async (req, res) => await gradoControllers.findAll(req, res));
module.exports = apiRoutes;