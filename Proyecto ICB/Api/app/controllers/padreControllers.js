'use strict'

const db = require('../config/db');
const Padres = db.Padres;

// Traer todos los padres (ya tienes esta función)
async function findAll(req, res){
    Padres.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar un padre
async function insertPadre(req, res){
    const padreInsert = req.body;
    Padres.create({
        id_padre: padreInsert.id,
        id_alumno: padreInsert.id_alumno,
        nombre: padreInsert.nombre,
        telefono: padreInsert.telefono,
        direccion: padreInsert.direccion
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar un padre
async function updatePadre(req, res){
    const padreUpdate = req.body;
    Padres.update(padreUpdate, {
        where: { id_padre: padreUpdate.id }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Padre actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el padre con ID=${padreUpdate.id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el padre"
        });
    });
}

module.exports = {
    findAll,
    insertPadre,
    updatePadre
}