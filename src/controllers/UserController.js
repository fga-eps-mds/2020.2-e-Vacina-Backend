const User = require('../models/User');


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
    const user = await User.findById(request.params.userId);
    
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
    const {email, phoneNumber} = request.body;
    
    if(email && await User.findOne({ email }))
      return response.status(400).send({error: 'Email already exists'});
  
    if(phoneNumber && await User.findOne({phoneNumber}))
      return response.status(400).send({error: 'PhoneNumber already exists'});

      const id = request.params.userId;
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
    await User.findByIdAndDelete(id);
    return response.send({message: 'Successfully deleted id: ' + id});
  }
  catch(error){
    return response.status(400).send({error: 'Failed to delete user : ' + error.message});
  }
}

module.exports = {createUser, getUserById, listUsers, updateUser, deleteUser};