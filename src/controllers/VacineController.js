const { response } = require('express');
const express = require('express');
const Vacine = require('../models/Vacine');

async function createVacine(request, response){

  try{
    const newVacine = new Vacine(request.body);
    const savedVacine = await newVacine.save();
    return response.send({savedVacine: savedVacine});
 
  }
  catch(error){
    return response.status(500).send({error: error});
  }

}


//
async function listVacines(request, response){
  try{
    const vacines = await Vacine.find({});
    return response.send({vacines: vacines});
  }
  catch(error){
    return response.status(500).send({error: error})
  }
}

async function getVacineById(request, response){

  try {
    const vacine = await Vacine.findById(request.params.vacineId);
    
    if(vacine!=null)
      return response.send({ vacine });
    
    else
      return response.status(400).send({error:'Vacine not found'});
    
  } catch (error) {
      return response.status(400).send({error: 'Vacine ID is wrong format'});
  } 
}

async function updateVacine(request, response){
  try{
 
  //updating vacine

    const id = request.params.vacineId;
    const update = request.body;
    const options = {new: true};
    const updtedVacine = await Vacine.findByIdAndUpdate(id, update, options);
    if(updtedVacine!=null)
      return response.send({updtedVacine});
    
    else
      return response.status(400).send({error: 'Vacine not found, check id again'});
    
  }catch(error){   
    return response.status(400).send({error: 'Failed to update vacine, maybe the id is wrong format: ' + error.message});
  }
}

async function deleteVacine(request, response){
  try{
    const id = request.params.vacineId;
    await Vacine.findByIdAndDelete(id);
    return response.send({message: 'Successfully deleted use with id: ' + id});
  }
  catch(error){
    return response.status(400).send({error: 'Failed to delete Vacine : ' + error.message});
  }
}

module.exports = {createVacine, getVacineById, listVacines, updateVacine, deleteVacine};