'use strict'

const db = require('../config/db');
const Ticket = db.Ticket;

// Traer todos los tickets (ya tienes esta función)
async function findAll(req, res){
    Ticket.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar un ticket
async function insertTicket(req, res){
    const ticketInsert = req.body;
    Ticket.create({
        id_ticket: ticketInsert.id,
        id_padre: ticketInsert.id_padre,
        id_alumno: ticketInsert.id_alumno,
        tipo_gestion: ticketInsert.tipo_gestion,
        descripcion: ticketInsert.descripcion,
        fecha: ticketInsert.fecha,
        hora: ticketInsert.hora,
        estado: ticketInsert.estado
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar un ticket
async function updateTicket(req, res){
    const ticketUpdate = req.body;
    Ticket.update(ticketUpdate, {
        where: { id_ticket: ticketUpdate.id }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Ticket actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el ticket con ID=${ticketUpdate.id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el ticket"
        });
    });
}

module.exports = {
    findAll,
    insertTicket,
    updateTicket
}