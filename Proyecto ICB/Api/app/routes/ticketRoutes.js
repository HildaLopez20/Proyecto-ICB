'use strict'

const express = require('express');
const ticketControllers = require('../controllers/ticketControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getTickets', async (req, res) => await ticketControllers.findAll(req, res))
.post('/insertTicket', async (req, res) => await ticketControllers.findAll(req, res))
.put('/updateTicket', async (req, res) => await ticketControllers.findAll(req, res));

module.exports = apiRoutes;