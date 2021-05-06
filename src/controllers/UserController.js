const User = require('../models/User');
const bcrypt = require('bcryptjs');
const profileController = require('./ProfileController');


 async function createUser(request,response){
    
  try { 

      const {email, phoneNumber} = request.body;

      if(await User.findOne({ email }))
        return response.status(400).send({error: 'Email already exists'});
      
      if(await User.findOne({phoneNumber}))
        return response.status(400).send({error: 'PhoneNumber already exists'});

        const user = await User.create(request.body);
        user.password = undefined;
        return response.send({user});
      
          

  } catch (error) {
      return response.status(400).send({error: 'Failed to register user: ' + error.message});
  }
}


async function getUserById(request, response){

  try {
    const user = await User.findById(request.params.userId).populate('profilesIds');
    
    if(user)
      return response.send({ user });
    
    return response.status(400).send({error:'User not found'});
    
  } catch (error) {
      return response.status(400).send({error: 'User ID is wrong format'});
  } 
}


async function listUsers(request, response){

  try{
    const users = await User.find({});
    return response.send({users});

  }catch(error){
    return response.status(400).send({error: 'Failed to list users'});
  }
}


async function updateUser(request, response){

  try{
    const {email, phoneNumber, password} = request.body;
    const id = request.params.userId;
    var compareId = await User.findOne({ email });
    
    if (compareId) {
      if (id != compareId._id && email)
        return response.status(400).send({error: 'Email already exists'});
    }
    
    compareId = await User.findOne({phoneNumber});
    
    if(compareId){
      if(phoneNumber && compareId._id != id)
      return response.status(400).send({error: 'PhoneNumber already exists'});
    }

    if(password) {
      var user = await User.findById(id).select('+password');
      if(!user){
        return res.status(400).send({error: "Error updating user info"});
      }
      
      if(await bcrypt.compare(password, user.password)){
        return res.status(400).send({error: "Password cannot be the same"});
      }
      
      const newPassword = await bcrypt.hash(password, 10);
      await user.updateOne({password: newPassword});
    }
      delete request.body["password"];
      const update = request.body;
      const options = {new: true};
      const updtedUser = await User.findByIdAndUpdate(id, update, options);
      if(updtedUser)
        return response.send({updtedUser});
      return response.status(400).send({error: 'User not found, check id again'});
      
    
    
  }catch(error){   
    return response.status(400).send({error: 'Failed to update user, maybe the id is wrong format: ' + error.message});
  }
}


async function deleteUser(request, response){
  try{
    const id = request.params.userId;
    const user = await User.findById(id);
    user.profilesIds.forEach(element => {
      req = {params:{userId:id,profileId:element}};
      profileController.deleteProfile(req); 
    });
    await User.findByIdAndDelete(id);
    return response.send({message: 'Successfully deleted id: ' + id});
  }
  catch(error){
    return response.status(400).send({error: 'Failed to delete user : ' + error.message});
  }
}
    


module.exports = {createUser, getUserById, listUsers, updateUser, deleteUser};