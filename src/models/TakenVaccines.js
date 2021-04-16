const mongoose = require('mongoose');

const TakenVaccineSchema = new mongoose.Schema({
  
  profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
      required: true,
  },
  
  vaccineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vaccine',
    required: true,
  },

  numberOfDosesTaken:{
    type: Number,
    required: true
  }
 
  
});


const TakenVaccine = mongoose.model("TakenVaccine", TakenVaccineSchema);

module.exports = TakenVaccine;
