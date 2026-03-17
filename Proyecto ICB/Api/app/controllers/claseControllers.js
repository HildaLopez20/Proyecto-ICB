'use strict'

const db = require('../config/db');
const Clases = db.Clases;

// Traer todas las clases (ya tienes esta función)
async function findAll(req, res){
    Clases.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar una clase
async function insertClase(req, res){
    const claseInsert = req.body;
    Clases.create({
        id_clase: claseInsert.id,
        nombre_clase: claseInsert.nombre
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar una clase
async function updateClase(req, res){
    const claseUpdate = req.body;
    Clases.update(claseUpdate, {
        where: { id_clase: claseUpdate.id }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Clase actualizada correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar la clase con ID=${claseUpdate.id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar la clase"
        });
    });
}

module.exports = {
    findAll,
    insertClase,
    updateClase
}