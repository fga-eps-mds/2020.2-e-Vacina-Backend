const axios = require('axios');

const csv = require('csv-parser');
const fs = require('fs');
const getStream = require('get-stream');

const mongoose = require('mongoose');

const path = "https://e-vacina-backend.herokuapp.com/auth/loginAdmin";
const admin = {
  email: 'e.vacina.team@gmail.com',
  password: 'evacina3500'
}

async function popullate(){
  
  try{
    const response = await axios.post(path, admin);
    
    if(response.status != 200){
      return console.log("Failed to login");
    }

    //get token
    console.log("Admin auth successful");
    const token = response.data.token;

    //read csv file
    const vaccines = await getStream.array(fs.createReadStream('scripts/popullate/data.csv').pipe(csv()));

    //save vaccines in DB
    const saveVaccinePath = "https://e-vacina-backend.herokuapp.com/vaccine"

    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    }


    vaccines.forEach(async vaccine => {
      try{
        const response = await axios.post(saveVaccinePath, vaccine, config);
        console.log("Saved");
      }
      catch(error){
        console.log("Not working, maybe it has been already saved!");
      }
    
    });

  }catch(error){
    console.log(error);
  } 

}

popullate();
