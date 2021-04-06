const mongoose = require('mongoose');

const VacineSchema = new mongoose.Schema({
  
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

  numberOfDosesTaken:{
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


const Vacine = mongoose.model("Vacine", VacineSchema);

module.exports = Vacine;
