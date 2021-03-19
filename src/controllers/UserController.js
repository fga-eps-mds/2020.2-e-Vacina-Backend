const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {

  async create(request, response){
    const {email, password, phoneNumber} = request.body;

    const emailCheck = await User.find({email:email});
    const phoneNumberCheck = await User.find({phoneNumber:phoneNumber});
    
    if(emailCheck.length>0)response.send("Email already registered");
    else if(phoneNumberCheck.length>0)response.send("Phone number already registered");
    
    else{

      const newUser = new User({ //creating new user
        email: email,
        password: password,
        phoneNumber: phoneNumber
      });

      //hashing password
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      
      const savedUser = await newUser.save();
      response.send(savedUser);
      
    }

  },

  async index(request, response){
    response.send("You request a user with this email:" + request.body.email);
  }
}