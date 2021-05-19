const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const Profile = require('../models/Profile');
const User = require('../models/User');
const Vaccine = require('../models/Vaccine');
const Admin = require('../models/Admin');
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

const admin = {
  email: "admin@hotmail.com",
  password: "admin_password"
}


let userId;
let profileId;
let vaccineId;
let takenVaccineId;
let dateOfDosesTaken;
let token;
let adminToken

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
    await Admin.collection.deleteMany({});

    await mongoose.connection.close();
    done();
  });

  it('should add a taken vaccine to a profile', async() => {

    await Admin.create(admin);
    adminToken = (await request.post('/auth/loginAdmin').send(admin)).body.token;
    vaccineId = (await request.post('/vaccine').set({'Authorization':`Bearer ${adminToken}`}).send(vaccine)).body.vaccine._id;
    userId = (await request.post('/user').send(user)).body.user._id;
    token = (await request.post('/auth/login').send({email:user.email, password:user.password})).body.token;
    
    const savedProfile = await request.post('/profile/'+userId).set('Authorization', 'Bearer '+token).send(profile);
    profileId = savedProfile.body.newProfile._id;
    dateOfDosesTaken = new Date("December 17, 1995 03:24:00");

    const body = {profileId: profileId, vaccineId: vaccineId, dateOfDosesTaken: dateOfDosesTaken};
    
    const response = await request.post('/taken').send(body);
    takenVaccineId = response.body.takenVaccine._id;

    expect(response.status).toBe(200);

  });

  it('should fail to save repeated taken vaccine', async() => {
    
    const body = {profileId: profileId, vaccineId: vaccineId, dateOfDosesTaken: dateOfDosesTaken};
    const response = await request.post('/taken').send(body);

    expect(response.status).toBe(400);
  });


  it('should fail to save taken vaccine', async() => {
    
    const body = {profileId: "wrongId", vaccineId: vaccineId, dateOfDosesTaken: dateOfDosesTaken};
    const response = await request.post('/taken').send(body);

    expect(response.status).toBe(400);
  });


  it('should list taken vaccine', async() => {
    const response = await request.get('/taken');
    expect(response.status).toBe(200);
  });

  it('should get taken vaccine by Id', async() => {
    const response = await request.get('/taken/'+takenVaccineId);
    expect(response.status).toBe(200);
  });

  it('should get taken vaccine by Profile Id', async() => {
    const response = await request.get('/taken/p/'+profileId);
    expect(response.status).toBe(200);
  });

  it('should fail to taken vaccine by Profile Id', async() => {
    const response = await request.get('/taken/p/wrong_id');
    expect(response.status).toBe(400);
  });

  it('should fail to get taken vaccine by Id', async() => {
    const response = await request.get('/taken/wrongId');
    expect(response.status).toBe(400);
  });

  it('should update taken vaccine', async() => {
    const update = {dateOfDosesTaken: new Date("December 17, 1995 03:24:00")};
    const response = await request.put('/taken/'+takenVaccineId).send(update);
    expect(response.status).toBe(200);
  });

  it('should fail to delete taken vaccine', async() => {
    const response = await request.delete('/taken/wrongId');
    expect(response.status).toBe(400);
  });

  it('should delete taken vaccine', async() => {
    const response = await request.delete('/taken/'+takenVaccineId);
    expect(response.status).toBe(200);
  });

});