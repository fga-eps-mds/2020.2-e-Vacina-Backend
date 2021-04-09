 const express = require('express');
 const TakenVaccine = require('../models/TakenVaccines');

 async function createTakenVaccine(request, response){

   try{
     const { userId, vaccineId } = request.body;
     const test =await TakenVaccine.find({userId,vaccineId});
     if(test ){
       // return response.status(400).send({error: 'Vaccine already taken'}); 
        return response.send({test});
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
     const listTaken = await TakenVaccine.find({});

     return response.send({listTaken});
   }
   catch(error){
    return response.status(400).send({error: 'Error loading taken vaccines'});
   }
 }

 async function getTakenVaccineById(request, response){

   try {
     const takenVaccine = await TakenVaccine.findById(request.params.takenVaccineId);
    
     return response.send({ takenVaccine });
   } catch (error) {
      return response.status(400).send({error: 'Taken vaccine not found'});
   } 
 }

 async function updateTakenVaccine(request, response){
   try{ 
     const takenVaccineId = request.params.takenVaccineId;
    
     if(!takenVaccineId)
      return response.status(400).send({error: 'Vaccine not found, check id again'});
    
     const takenVaccine = await TakenVaccine.findByIdAndUpdate(takenVaccineId,request.body,true);
    
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

 module.exports = {createTakenVaccine, getTakenVaccineById, listTakenVaccines, updateTakenVaccine, deleteTakenVaccine};