 const TakenVaccine = require('../models/TakenVaccines');

 async function createTakenVaccine(request, response){

   try{
     const { profileId, vaccineId } = request.body;
     if( (await TakenVaccine.find({profileId,vaccineId}) ).length !== 0){
        return response.status(400).send({error: 'Vaccine already taken'});
     }
    
     const takenVaccine = await TakenVaccine.create(request.body);
    
     return response.send({takenVaccine});
   }
   catch(error){
     response.status(400).send({error: error});
   }

 }

 async function listTakenVaccines(request, response){
   try{
     const listTaken = await TakenVaccine.find({}).populate('vaccineId',['name','_id','periodicity','dateOfDoses']);

     return response.send({listTaken});
   }
   catch(error){
    return response.status(400).send({error: 'Error loading taken vaccines'});
   }
 }

 async function getTakenVaccineById(request, response){

   try {
     const takenVaccine = await TakenVaccine.findById(request.params.takenVaccineId).populate('vaccineId');
  

     return response.send({ takenVaccine });
   } catch (error) {
      return response.status(400).send({error: 'Taken vaccine not found'});
   } 
 }

 async function getTakenVaccineByProfile(request, response){
  try {
    const profileId = request.params.profileId
    var MyObjectId = require('mongoose').Types.ObjectId;
    var queryVenue = {profileId: new MyObjectId(profileId)};
    const takenVaccine = await TakenVaccine.find(queryVenue).populate('vaccineId');
    return response.send({ takenVaccine });
  } catch (error) {
     return response.status(400).send({error: 'Taken vaccine not found'});
  } 
}

 async function updateTakenVaccine(request, response) {
   try{ 
     const takenVaccineId = request.params.takenVaccineId;
     const currentTakenVaccine = await TakenVaccine.findById(takenVaccineId);
     const {dateOfDosesTaken} = request.body;

     if(!dateOfDosesTaken)
      return response.status(400).send({error: 'Dates to update not found'});
     
     if(!currentTakenVaccine)
      return response.status(400).send({error: 'Vaccine not found, check id again'});

      const update = {dateOfDosesTaken: dateOfDosesTaken};
    
     const takenVaccine = await TakenVaccine.findByIdAndUpdate(takenVaccineId, update, {new:true});
    
     return response.send({takenVaccine});
   }catch(error){   
    return response.status(400).send({error: 'Failed to update vaccine, maybe the id is wrong format: ' + error.message});
   }
 }

 async function deleteTakenVaccine(request, response){
   try{
     const takenVaccineId = request.params.takenVaccineId;
     
     await TakenVaccine.findByIdAndRemove(takenVaccineId);

     return response.send({message: 'Deleted'});
   }
   catch(error){
     return response.status(400).send({error: 'Failed to delete taken vaccine : ' + error.message});
   }
 }

 async function deleteTakenVaccineByComponentId(queryVenue){
  try {
    const takenVaccine = await TakenVaccine.find(queryVenue).deleteMany();
    return  takenVaccine;
  } catch (error) {
     return console.log("deu erro");
  } 
}

 module.exports = {deleteTakenVaccineByComponentId,getTakenVaccineByProfile,createTakenVaccine, getTakenVaccineById, listTakenVaccines, updateTakenVaccine, deleteTakenVaccine};