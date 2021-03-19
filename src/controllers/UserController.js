const User = require('../models/User');

 async function createUser(request,response){
  const {email, password, phoneNumber} = request.body;
    
  try {
   
      const checkEmail = await User.findOne({email:email});
      const checkPassword = await User.findOne({phoneNumber:phoneNumber});

      if(await User.findOne({email:email})!=null)
        response.status(400).send({error:'Email already registered'});

      else if(await User.findOne({password:password})!=null)
        response.status(400).send({error:'Cellphone number already registered'});
      
      else{
        const newUser = new User(request.body);
        newUser.password = undefined;
        response.send({newUser});
      }
    

  } catch (error) {
    response.status(400).send({error: 'Registration failed'});
  }

}

async function getUserById(request, response){
  try {
    const user = await User.findById(request.params.userId);
    response.send({ user });
    
  } catch (error) {
    response.status(400).send({error: 'User not found'});
  }
  
}

async function listUsers(response){
  
  try{
    const users = await User.find();
    response.send({users});

  }catch(error){
    response.status(400).send({error: 'Failed to list users'});
  }
}

module.exports = { createUser, getUserById, listUsers};