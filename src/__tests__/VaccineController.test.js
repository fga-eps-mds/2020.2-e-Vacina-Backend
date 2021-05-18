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
  
  beforeEach(async () => {
    await Vaccine.collection.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
    done();
  });

  it('Should create and save a admin user in db', async() => {        
    const savedAdmin = await Admin.create(admin);
    expect(savedAdmin).toHaveProperty('email', admin.email);

  });

  it('Should create and save a vaccine in db', async() => {
    const token = (await request.post('/auth/loginAdmin').send(admin)).body.token;
    const response = await request.post('/vaccine').set({'Authorization':`Bearer ${token}`}).send(vaccine);
    expect(response.status).toBe(200);
  });

  
});