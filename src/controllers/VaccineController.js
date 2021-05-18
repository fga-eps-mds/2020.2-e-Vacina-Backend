const Vaccine = require('../models/Vaccine');
const TakenVaccineController = require('./TakenVaccineController');

async function createVaccine(request, response){

  try{
    const { name } = request.body;

    if (await Vaccine.findOne({name}))
      return response.status(400).send({error: 'Vaccine already exists'});

    const vaccine = await Vaccine.create(request.body);
    return response.send({vaccine});
 
  }
  catch(error){
    return response.status(500).send({error: error});
  }

}

async function listVaccines(request, response){
  try{
    const vaccines = await Vaccine.find({});
    return response.send({vaccines});
  }
  catch(error){
    return response.status(500).send({error: error})
  }
}

async function getVaccineById(request, response){

  try {
    const vaccine = await Vaccine.findById(request.params.vaccineId);
    
    if(vaccine)
     return response.send({ vaccine });
    
    return response.status(400).send({error:'Vaccine not found'});
    
  } catch (error) {
     return response.status(400).send({error: 'Vaccine ID is wrong format'});
  } 
}

async function updateVaccine(request, response){
  try{
    const id = request.params.vaccineId;
    const update = request.body;
    const options = {new: true};
    const updtedVaccine = await Vaccine.findByIdAndUpdate(id, update, options);
    
    if(updtedVaccine)
      return response.send({updtedVaccine});
    
    return response.status(400).send({error: 'Vaccine not found, check id again'});
    
  }catch(error){   
    return response.status(400).send({error: 'Failed to update vaccine, maybe the id is wrong format: ' + error.message});
  }
}

async function deleteVaccine(request, response){
  try{
    const id = request.params.vaccineId;
    var MyObjectId = require('mongoose').Types.ObjectId;
    var queryVenue = {vaccineId: new MyObjectId(id)};
    const res = await TakenVaccineController.deleteTakenVaccineByComponentId(queryVenue);
    await Vaccine.findByIdAndDelete(id);
    response.send({message: 'Successfully deleted id: ' + id});
  }
  catch(error){
    response.status(400).send({error: 'Failed to delete Vaccine : ' + error.message});
  }
}

module.exports = {createVaccine, getVaccineById, listVaccines, updateVaccine, deleteVaccine};