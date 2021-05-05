const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const authConfig = process.env.SECRET;

async function login(request, response){


  try{
    const {email, password} = request.body;

    const user = await User.findOne({email}).select('+password');

    if(!user) 
      return response.status(400).send({error: "User not found"});

    if(!await bcrypt.compare(password, user.password))
      return response.status(400).send({error: "Invalid password"});

    
    user.password = undefined;
    
    const token = jwt.sign({id: user.id}, authConfig, {
      expiresIn: 86400,
    });

    response.send({user, token});

  }

  catch(error){
    response.status(400).send({error:'Failed to login: '+error});
  }
}

module.exports = {login};