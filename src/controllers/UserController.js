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
        const savedUser = await newUser.save();
        savedUser.password = undefined;
        response.send({savedUser});
      }
      

  } catch (error) {
    response.status(400).send({error: 'Registration failed'});
  }

}


async function getUserById(request, response){

  try {
    const user = await User.findById(request.params.userId);
    
    if(user!=null) response.send({ user });
    response.status(400).send({error: 'User not found'});
    
  } catch (error) {
    response.status(400).send({error: 'Failed to look for user'});
  }
  
}


async function listUsers(request, response){

  try{
    const users = await User.find({});

    users.forEach(user => {
      user.password = undefined;
    });
    response.send({users});

  }catch(error){
    response.status(400).send({error: 'Failed to list users'});
  }
}

module.exports = {createUser, getUserById, listUsers};