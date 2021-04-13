const express = require('express');
const Profile = require('../models/Profile');
const User = require('../models/User');

// https://e-vacina/profile/userId
async function createProfile(request, response){
  try{
    
    const userId = request.params.userId; //get user
    const currentUser=  await User.findById(userId);
    if(currentUser==null) response.status(400).send({error: 'User not found. Check id again'});   
    // await User.findOne({ email })
    const {cpf} = request.body;
    if(await Profile.findOne({cpf:cpf})) return response.status(400).send({error: 'CPF already exists'});
    
    const newProfile = new Profile(request.body); //creates new profiles
    const savedProfile = await newProfile.save();
    const newProfileId = savedProfile.id;

    const profilesIds = currentUser.profilesIds; //get profiles ids
    profilesIds.push(newProfileId);

    const update = {profilesIds: profilesIds};
    const options = {new: true}
    await User.findByIdAndUpdate(userId, update, options); //updating user
    
    return response.send(savedProfile);

  }

  catch(error){
    return response.status(400).send({error: error});
  }
}

async function getProfileById(request, response){
  try{
    const id = request.params.profileId;
    const profile = await Profile.findById(id);
    
    if(profile==null) return response.status(400).send({error: 'Profile not found'});
    else return response.send({profile: profile});

  }
  catch(error){
    return response.send(400).send({error: error});
  }
}

async function listProfiles(request, response){
    try{

        const userId = request.params.userId; //get user
        const currentUser=  await User.findById(userId);
        if(currentUser==null) response.status(400).send({error: 'User not found. Check id again'}); 

        const profilesIds = currentUser.profilesIds;
        const profiles = await Profile.find().where('_id').in(profilesIds);
          
        return response.send({profiles: profiles});

    }
    catch(error){
        return response.status(400).send({error: error});
    }
}

async function updateProfile(request, response){
  try{

    const profileId = request.params.profileId;
    const {cpf} = request.body;

    if(await Profile.findOne({cpf:cpf})) return response.status(400).send({error: 'CPF already exists'});

    const update = request.body;
    const options = {new: true}
    const updatedProfile = await Profile.findByIdAndUpdate(profileId, update, options);

    
    return response.send({updatedProfile: updatedProfile});

  }
  catch(error){
    return response.status(400).send({error: error});
  }
}


async function deleteProfile(request, response){
  try{  
    const profileId = request.params.profileId;
    
    if(! await Profile.findById(profileId)) return response.status(400).send({error: 'Profile not found'});
    
    await Profile.findByIdAndDelete(profileId);

    
    const userId = request.params.userId;
    const user = await User.findById(userId);  //updating profile ids list in User
    const profilesIds = user.profilesIds;  

    for(let i = 0; i<profilesIds.length; i++){
      if(profilesIds[i]===profileId){
        profilesIds.splice(i, 1);
      }
    }

    const update = {profilesIds: profilesIds};
    const options = {new: true}
    await User.findByIdAndUpdate(userId, update, options); 
    return response.send({message: 'Successfully deleted profile with id: ' + profileId});

  
  }
  catch(error){
    console.log(error);
    return response.status(400).send({error: error});
  }
}

module.exports = {createProfile, listProfiles, getProfileById, updateProfile, deleteProfile};