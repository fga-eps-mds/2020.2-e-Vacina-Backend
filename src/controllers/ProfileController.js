const Profile = require('../models/Profile');
const User = require('../models/User');
const TakenVaccineController = require('./TakenVaccineController');

async function createProfile(request, response){
  try{
    
    const userId = request.params.userId; //get user
    const currentUser = await User.findById(userId);
    if(!currentUser) 
      return response.status(400).send({error: 'User not found. Check id again'});   

    const {cpf} = request.body;
    if(await Profile.findOne({cpf:cpf}))
     return response.status(400).send({error: 'CPF already exists in DB'});
    
    const newProfile = await Profile.create(request.body); 

    const profilesIds = currentUser.profilesIds;
    profilesIds.push(newProfile.id);

    const update = {profilesIds: profilesIds};
    const options = {new: true};
    await User.findByIdAndUpdate(userId, update, options);
    
    return response.send({newProfile});

  }

  catch(error){
    return response.status(400).send({error: error});
  }
}

async function getProfileById(request, response){
  try{
    const id = request.params.profileId;
    const profile = await Profile.findById(id);
    
    if(!profile)
     return response.status(400).send({error: 'Profile not found'});
    return response.send({profile: profile});

  }
  catch(error){
    return response.send(400).send({error: error});
  }
}

async function listProfilesByUser(request, response){
    try{

        const userId = request.params.userId;
        const currentUser =  await User.findById(userId);
        if(!currentUser)
         return response.status(400).send({error: 'User not found. Check id again'}); 

        const profilesIds = currentUser.profilesIds;
        const profiles = await Profile.find().where('_id').in(profilesIds);
          
        return response.send({profiles});

    }
    catch(error){
        return response.status(400).send({error: error});
    }
}

async function updateProfile(request, response){
  try{

    const profileId = request.params.profileId;
    const {cpf} = request.body;
    const userFound = await Profile.findOne({cpf:cpf});
    if(userFound && userFound._id != profileId)
     return response.status(400).send({error: 'CPF already exists'});

    const update = request.body;
    const options = {new: true}
    const updatedProfile = await Profile.findByIdAndUpdate(profileId, update, options);

    return response.send({updatedProfile});

  }
  catch(error){
    return response.status(400).send({error: error});
  }
}


async function deleteProfile(request, response){
  try{  
    const profileId = request.params.profileId;
    const userId = request.params.userId;
    
    if( !(await Profile.findById(profileId)) )
    return response.status(400).send({error: 'Profile not found'});
    
    const user = await User.findById(userId);  
    
    
    if (!user) 
    return response.status(400).send({error: 'User not found'});      
    
    
    const oldProfilesIdsLenght = user.profilesIds.length;  
    const profilesIds = user.profilesIds;  

    for(let i = 0; i<profilesIds.length; i++){
      if(profilesIds[i]==profileId){
        profilesIds.splice(i, 1);
      }
    }
    
    if(profilesIds.length === oldProfilesIdsLenght)
    return response.status(400).send({error: 'Profile not found in user'});
    
    var MyObjectId = require('mongoose').Types.ObjectId;
    var queryVenue = {profileId: new MyObjectId(profileId)};
    const update = {profilesIds: profilesIds};
    const options = {new: true}

    await TakenVaccineController.deleteTakenVaccineByComponentId(queryVenue);
    await User.findByIdAndUpdate(userId, update, options); 
    await Profile.findByIdAndDelete(profileId);
    return response.send({message: 'Successfully deleted profile with id: ' + profileId});

  }
  catch(error){
    return response.status(400).send({error: error});
  }
}

module.exports = {createProfile, listProfilesByUser, getProfileById, updateProfile, deleteProfile};