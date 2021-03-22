const User = require('../models/User');


 async function createUser(request,response){
    
  try {

      const newUser = new User(request.body);
      const savedUser = await newUser.save();
      savedUser.password = undefined;
      response.send({savedUser});
          

  } catch (error) {
      response.status(400).send({error: error.message});
  }
}


async function getUserById(request, response){

  try {
    const user = await User.findById(request.params.userId);
    
    if(user!=null) 
      response.send({ user });

    else 
      response.status(400).send({error: 'User not found'});

    
  } catch (error) {
      response.status(400).send({error: 'Failed to look for user'});
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
  try{
 
    //updating user
    const id = request.params.userId;
    const upadate = request.body;
    const options = {new: true};

    const updatedUser = await User.findByIdAndUpdate(id, upadate, options);

    if(updatedUser!=null)
      response.send({updatedUser});
    
    else
      response.status(400).send({error:'User not found'});
  

  }catch(error){ //if client sends an email/phoneNumber already registered, or Id sent is not in expected format
    response.status(400).send({error: error.message});
  }
}

module.exports = {createUser, getUserById, listUsers, updateUser};