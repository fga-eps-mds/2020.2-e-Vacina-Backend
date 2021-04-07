const express = require('express');
const Profile = require('../models/Profile');
const User = require('../models/User');

// https://e-vacina/profile/userId
async function createProfile(request, response){
  try{
    
    const userId = request.params.userId; //get user
    const currentUser=  await User.findById(userId);
    if(currentUser==null) response.status(400).send({error: 'User not found. Check id again'});   
    
    const {cpf} = request.body;
    if(await Profile.findOne({cpf:cpf})) response.status(400).send({error: 'CPF already exists'});
    
    const newProfile = new Profile(request.body); //creates new profiles
    const savedProfile = await newProfile.save();
    const newProfileId = savedProfile.id;

    const profilesIds = currentUser.profilesIds; //get profiles ids
    profilesIds.push(newProfileId);

    const update = {profilesIds: profilesIds};
    const options = {new: true}
    const updtedUser = await User.findByIdAndUpdate(userId, update, options); //updating user
    
    response.send(updtedUser);

    response.send({savedProfie: savedProfile}); //response


  }

  catch(error){
    response.status(500).send({error: error});
  }
}

async function listProfiles(request, response){
    try{

        const userId = request.params.userId; //get user
        const currentUser=  await User.findById(userId);
        if(currentUser==null) response.status(400).send({error: 'User not found. Check id again'}); 

        const profilesIds = currentUser.profilesIds;
        const profiles = await Profile.find().where('_id').in(profilesIds);
          
        
        response.send({profiles: profiles});

    }
    catch(error){
        response.status(500).send({error: error});
    }
}

module.exports = {createProfile, listProfiles};