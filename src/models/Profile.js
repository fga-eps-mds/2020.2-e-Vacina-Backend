const express = require('express'); 
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({

    name:  {
      type: String,
      required: true,
      },
    cpf:  {
      type: String,
      required: true,
      unique: true,
    },
    birthDate:  {
      type: Date,
      required: true,
    },
    sex:  {
      type: String,
      required: true,
    },

});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
