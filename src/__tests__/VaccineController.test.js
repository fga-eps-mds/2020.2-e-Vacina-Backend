const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const Vaccine = require('../models/Vaccine');
const request = supertest(app);

const vaccine = {
  name: "CoronaVac",
  description: "Vacina destinada à prevenção à Covid-19",
  numberOfDoses: 2,
  preventDeseases: ["Covid"],
  recommendations: ["Idosos", "Portadores de corbomidades"],
  periodicity: 30
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

  it('Should create and save user in db', async() => {
    const response = await request.post('/vaccine').send(vaccine);
    expect(response.status).toBe(200);
  });

  
});