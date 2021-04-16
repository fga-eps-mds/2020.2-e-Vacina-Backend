const mongoose = require('mongoose');

const VaccineSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    unique: true,
  },
  
  description: {
    type: String,
    required: true,
  },

  numberOfDoses:{
    type: Number,
    required: true
  },

  preventDeseases:{
    type: [String],
    required: true,
  },

  recommendations:{
    type: [String],
    required: true,
  },

  periodicity:{
    type: Number,
    required: true,
  }
  
});


const Vaccine = mongoose.model("Vaccine", VaccineSchema);

module.exports = Vaccine;
