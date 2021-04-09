const User = require('../models/User');


 async function createUser(request,response){
    
  try { 

      //avoiding duplicate user in database
      const {email, phoneNumber} = request.body;

      if(await User.findOne({ email }))
        return response.status(400).send({error: 'Email already exists'});
      
      else if(await User.findOne({phoneNumber}))
        return response.status(400).send({error: 'PhoneNumber already exists'})

      //registering new user
      else{
        const newUser = new User(request.body);
        const savedUser = await newUser.save();
        savedUser.password = undefined;
        response.send({savedUser});
      }
          

  } catch (error) {
      response.status(400).send({error: 'Failed to register user: ' + error.message});
  }
}


async function getUserById(request, response){

  try {
    const user = await User.findById(request.params.userId);
    
    if(user!=null)
      response.send({ user });
    
    else
      response.status(400).send({error:'User not found'});
    
  } catch (error) {
      response.status(400).send({error: 'User ID is wrong format'});
  } 
}


async function listUsers(request, response){

  try{
    const users = await User.find({});
    response.send({users});


  }catch(error){
    response.status(400).send({error: 'Failed to list users'});
  }
}


async function updateUser(request, response){
//this code will work only if the clients send exclusively the modified fields in the body

  try{
    const {email, phoneNumber} = request.body;
    //avoiding duplicate user in database
    if(email!=null && await User.findOne({ email }))
      return response.status(400).send({error: 'Email already exists'});
  
    else if(phoneNumber!=null && await User.findOne({phoneNumber}))
      return response.status(400).send({error: 'PhoneNumber already exists'})

 
    //updating user
    else{
      const id = request.params.userId;
      const update = request.body;
      const options = {new: true};
      const updtedUser = await User.findByIdAndUpdate(id, update, options);
      if(updtedUser!=null)
        response.send({updtedUser});
      
      else
        response.status(400).send({error: 'User not found, check id again'});
      
    }
    
  }catch(error){   
    response.status(400).send({error: 'Failed to update user, maybe the id is wrong format: ' + error.message});
  }
}


async function deleteUser(request, response){
  try{
    const id = request.params.userId;
    await User.findByIdAndDelete(id);
    response.send({message: 'Successfully deleted use with id: ' + id});
  }
  catch(error){
    response.status(400).send({error: 'Failed to delete user : ' + error.message});
  }
}

module.exports = {createUser, getUserById, listUsers, updateUser, deleteUser};