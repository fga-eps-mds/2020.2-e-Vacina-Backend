const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const Vaccine = require('../models/Vaccine');
const Admin = require('../models/Admin');
const User = require('../models/User');
const request = supertest(app);

const vaccine = {
  name: "CoronaVac",
  description: "Vacina destinada à prevenção à Covid-19",
  numberOfDoses: 2,
  preventDeseases: ["Covid"],
  recommendations: ["Idosos", "Portadores de corbomidades"],
  periodicity: 30
}

const vaccine2 = {
  name: "AstraZenica",
  description: "Vacina destinada à prevenção à Covid-19",
  numberOfDoses: 2,
  preventDeseases: ["Covid"],
  recommendations: ["Idosos", "Portadores de corbomidades"],
  periodicity: 15
}

let id;
let token;

const admin = {
  email: "admin@hotmail.com",
  password: "admin_password"
}


describe('Vaccine Controller', () => {
  beforeAll(async() => {
    mongoose.connect(global.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    }); 
  });
  

  afterAll(async () => {
    await Vaccine.collection.deleteMany({});
    await Admin.collection.deleteMany({});
    await mongoose.connection.close();
    done();
  });

  it('Should create and save a admin user in db', async() => {        
    const savedAdmin = await Admin.create(admin);
    expect(savedAdmin).toHaveProperty('email', admin.email);

  });

  it('Should create and save a vaccine in db', async() => {
    token = (await request.post('/auth/loginAdmin').send(admin)).body.token;
    const response = await request.post('/vaccine').set({'Authorization':`Bearer ${token}`}).send(vaccine);
    expect(response.status).toBe(200);
  });
  
  it('Should fail to create repeated vaccine in db', async() => {
    const response = await request.post('/vaccine').set({'Authorization':`Bearer ${token}`}).send(vaccine);
    expect(response.status).toBe(400);
  });

  it('Should fail to create vaccine with no fields', async() => {
    const response = await request.post('/vaccine').set({'Authorization':`Bearer ${token}`}).send({});
    expect(response.status).toBe(400);
  });
  
  it('Should fail to save a user in DB withou authentication', async() => {
    const response = await request.post('/vaccine').send(vaccine);
    expect(response.status).toBe(401);
  });

  it('Should list all vaccines in DB', async() => {
    const response = await request.get('/vaccine');
    expect(response.status).toBe(200);
  });

  it('Should get a vaccine by id', async() => {
    const savedVaccine = await request.post('/vaccine').set({'Authorization':`Bearer ${token}`}).send(vaccine2);
    id =  savedVaccine.body.vaccine._id;

    const response = await request.get('/vaccine/'+id);
    expect(response.status).toBe(200);
  });

  it('Should fail to get a vaccine by id (mal formatted id)', async() => {
    const response = await request.get('/vaccine/malFormatedId');
    expect(response.status).toBe(400);
  });

  it('Should fail to get a vaccine by id (user not found)', async() => {
    const response = await request.get('/vaccine/606bb912da92cc0159f9a93a');
    expect(response.status).toBe(400);
  });
  
  it('Should be able to update a vaccine', async() => {
    const response = await request.put('/vaccine/'+id).set({'Authorization':`Bearer ${token}`}).send({name: "CoronaVac-2"});
    expect(response.status).toBe(200);
  });

  it('Should fail to update a vaccine', async() => {
    const response = await request.put('/vaccine/606bb912da92cc0159f9a93a').set({'Authorization':`Bearer ${token}`}).send({name: "CoronaVac-2"});
    expect(response.status).toBe(400);
  });

  it('Should fail to update a vaccine', async() => {
    const response = await request.put('/vaccine/MalFormatedId').set({'Authorization':`Bearer ${token}`}).send({name: "CoronaVac-2"});
    expect(response.status).toBe(400);
  });

  it('Should fail to update a vaccine', async() => {
    const response = await request.put('/vaccine/MalFormatedId').set({'Authorization':`Bearer ${token}`}).send({name: "CoronaVac-2"});
    expect(response.status).toBe(400);
  });

  it('Should fail to delete vaccine', async() => {
    const response = await request.delete('/vaccine/606bb912da92cc0159f9a93a');
    expect(response.status).toBe(401);
  });

  it('Should fail to delete vaccine', async() => {
    const response = await request.delete('/vaccine/606bb912da92cc0159f9a93a').set({'Authorization':`Bearer ${token}`});
    expect(response.status).toBe(400);
  });

  it('Should fail to delete vaccine', async() => {
    const response = await request.delete('/vaccine/malFormatedId').set({'Authorization':`Bearer ${token}`});
    expect(response.status).toBe(400);
  });

  it('Should fail delete vaccine', async() => {
    const response = await request.delete('/vaccine/'+id).set({'Authorization':`Bearer ${token}`});
    expect(response.status).toBe(200);
  });

  
  

});