'use strict'

const db = require('../config/db');
const Grado = db.Grado;

// Traer todos los grados (ya tienes esta función)
async function findAll(req, res){
    Grado.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar un grado
async function insertGrado(req, res){
    const gradoInsert = req.body;
    Grado.create({
        id_grado: gradoInsert.id,
        nombre_grado: gradoInsert.nombre,
        id_seccion: gradoInsert.id_seccion
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar un grado
async function updateGrado(req, res){
    const gradoUpdate = req.body;
    Grado.update(gradoUpdate, {
        where: { id_grado: gradoUpdate.id }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Grado actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el grado con ID=${gradoUpdate.id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el grado"
        });
    });
}

module.exports = {
    findAll,
    insertGrado,
    updateGrado
}