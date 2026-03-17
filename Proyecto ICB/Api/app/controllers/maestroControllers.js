'use strict'

const db = require('../config/db');
const Maestros = db.Maestros;

// Traer todos los maestros (ya tienes esta función)
async function findAll(req, res){
    Maestros.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar un maestro
async function insertMaestro(req, res){
    const maestroInsert = req.body;
    Maestros.create({
        id_maestro: maestroInsert.id,
        id_grado: maestroInsert.id_grado,
        nombre: maestroInsert.nombre,
        numero: maestroInsert.numero
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar un maestro
async function updateMaestro(req, res){
    const maestroUpdate = req.body;
    Maestros.update(maestroUpdate, {
        where: { id_maestro: maestroUpdate.id }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Maestro actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el maestro con ID=${maestroUpdate.id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el maestro"
        });
    });
}

module.exports = {
    findAll,
    insertMaestro,
    updateMaestro
}