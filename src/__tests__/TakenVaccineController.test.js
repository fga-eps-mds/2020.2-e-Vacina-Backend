const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const Profile = require('../models/Profile');
const User = require('../models/User');
const Vaccine = require('../models/Vaccine');
const request = supertest(app);


const user = {
  email: 'caique@gmail.com',
  password: 'rio_janeiro',
  phoneNumber: '619922345493'
}


const profile = { 
  name: "Caíque",
  cpf: "059.344.230.88",
  birthDate: "12/14/1964",
  sex: "male"
}

const vaccine = {
  name: "CoronaVac",
  description: "Vacina destinada à prevenção à Covid-19",
  numberOfDoses: 2,
  preventDeseases: ["Covid"],
  recommendations: ["Idosos", "Portadores de corbomidades"],
  periodicity: 30
}


let userId;
let profileId;
let vaccineId;
let takenVaccineId;
let token;

describe('TakenVaccine Controller', () => {
  beforeAll(async() => {
    mongoose.connect(global.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    }); 
  });


  afterAll(async () => {
    await User.collection.deleteMany({});
    await Profile.collection.deleteMany({});
    await Vaccine.collection.deleteMany({});

    await mongoose.connection.close();
    done();
  });

  it('should add a taken vaccine to a profile', async() => {

    vaccineId = (await request.post('/vaccine').send(vaccine)).body.vaccine._id;
    userId = (await request.post('/user').send(user)).body.user._id;
    token = (await request.post('/auth/login').send({email:user.email, password:user.password})).body.token;
    const savedProfile = await request.post('/profile/'+userId).set('Authorization', 'Bearer '+token).send(profile);
    profileId = savedProfile.body.newProfile._id;

    const body = {profileId: profileId, vaccineId: vaccineId, numberOfDosesTaken: 0};
    
    const response = await request.post('/taken').send(body);
    takenVaccineId = response.body.takenVaccine._id;

    expect(response.status).toBe(200);

  });

  it('should list taken vaccine', async() => {
    const response = await request.get('/taken');
    expect(response.status).toBe(200);
  });

  it('should get taken vaccine by Id', async() => {
    const response = await request.get('/taken/'+takenVaccineId);
    expect(response.status).toBe(200);
  });

  it('should update taken vaccine', async() => {
    const update = {numberOfDosesTaken: 1};
    const response = await request.get('/taken/'+takenVaccineId).send(update);
    expect(response.status).toBe(200);
  });

});