const express = require('express');
const Vacine = require('../models/Vacine');

async function createVacine(request, response){

  try{
    const newVacine = new Vacine(request.body);
    const savedVacine = await newVacine.save();
    response.send({savedVacine: savedVacine});
 
  }
  catch(error){
    response.status(500).send({error: error});
  }

}

module.exports = {createVacine};