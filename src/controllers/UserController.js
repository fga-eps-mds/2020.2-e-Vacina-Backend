const User = require('../models/User');

module.exports = {

  async create(request, response){
    const {email, password, phoneNumber} = request.body;

    const newUser = new User({
      email: email,
      password: password,
      phoneNumber: password
    });

    const result = await newUser.save();
    response.send(result);
  },

  async index(request, response){
    response.send("You request a user with this email:" + request.body.email);
  }
}