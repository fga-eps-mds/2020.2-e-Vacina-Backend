const express = require('express');
const Vaccine = require('../models/Vaccine');

async function createVaccine(request, response){

  try{
    const newVaccine = new Vaccine(request.body);
    const savedVaccine = await newVaccine.save();
    response.send({savedVaccine: savedVaccine});
 
  }
  catch(error){
    response.status(500).send({error: error});
  }

}


//
async function listVaccines(request, response){
  try{
    const vaccines = await Vaccine.find({});
    response.send({vaccines: vaccines});
  }
  catch(error){
    response.status(500).send({error: error})
  }
}

async function getVaccineById(request, response){

  try {
    const vaccine = await Vaccine.findById(request.params.vaccineId);
    
    if(vaccine!=null)
      response.send({ vaccine });
    
    else
      response.status(400).send({error:'Vaccine not found'});
    
  } catch (error) {
      response.status(400).send({error: 'Vaccine ID is wrong format'});
  } 
}

async function updateVaccine(request, response){
  try{
 
  //updating vaccine

    const id = request.params.vaccineId;
    const update = request.body;
    const options = {new: true};
    const updtedVaccine = await Vaccine.findByIdAndUpdate(id, update, options);
    if(updtedVaccine!=null)
      response.send({updtedVaccine});
    
    else
      response.status(400).send({error: 'Vaccine not found, check id again'});
    
  }catch(error){   
    response.status(400).send({error: 'Failed to update vaccine, maybe the id is wrong format: ' + error.message});
  }
}

async function deleteVaccine(request, response){
  try{
    const id = request.params.vaccineId;
    await Vaccine.findByIdAndDelete(id);
    response.send({message: 'Successfully deleted use with id: ' + id});
  }
  catch(error){
    response.status(400).send({error: 'Failed to delete Vaccine : ' + error.message});
  }
}

module.exports = {createVaccine, getVaccineById, listVaccines, updateVaccine, deleteVaccine};