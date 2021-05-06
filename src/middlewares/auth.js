const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const authConfig = process.env.SECRET;

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if(!authHeader) return response.status(401).send({error:'No token provided'});

  const parts = authHeader.split(' ');

  if(!parts.length===2) return response.status(401).send({error: 'Token error'});
  
  const [scheme, token] = parts;

  if(!/^Bearer$/i.test(scheme)) return response.status(401).send({error: 'Token malformatted'});

  jwt.verify(token, authConfig, (err, decoded) => {
    if(err) return response.status(401).send({error: 'Token invalid'});

    return next();
  });

}