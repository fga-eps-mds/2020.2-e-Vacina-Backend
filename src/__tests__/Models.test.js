const mongoose = require('mongoose');
const User = require('../models/User');
const Profile = require('../models/Profile');
const Vaccine = require('../models/Vaccine');
const TakenVaccines = require('../models/TakenVaccines');

describe('Profile Controller', () => {
  beforeAll(async() => {
    mongoose.connect(global.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    }); 
  });

  beforeEach(async () => {
    await User.collection.deleteMany({});
    await Profile.collection.deleteMany({});
    await Vaccine.collection.deleteMany({});
    await Taken.collection.deleteMany({});

    
  });

  afterAll(async () => {
    await mongoose.connection.close();
    done();
  });
  
  it('Should save a Vaccine in DB', async() => {
    const mockVaccine = {
      name: "CoronaVac",
      description: "Vacina para o covid-19",
      numberOfDoses: 2,
      preventDeseases: ["Covid-19"],
      recommendations: ["Idosos", "Comorbidades"],
      periodicity: 30
    }

    const savedVaccine = await Vaccine.create(mockVaccine);

    expect(savedVaccine).toHaveProperty('name', mockVaccine.name);

  });


  it('Should save a User in DB with encrypted password', async() => {
    const mockUser = {
      email: "luskinhas@hotmail.com",
      password: "super_pass",
      phoneNumber: "61982732033"
    }

    const savedUser = await User.create(mockUser);

    expect(savedUser).toHaveProperty('email', mockUser.email);
    expect(savedUser).not.toHaveProperty('password', mockUser.password);
    expect(savedUser).toHaveProperty('phoneNumber', mockUser.phoneNumber);

  });


  it('Should save a Profile in DB', async() => {
    const mockProfile = {
      name: "Lucas Moreira",
      birthDate: "01/02/1980",
      sex: "male",
      cpf: "06499334499"
    }

    const savedProfile = await Profile.create(mockProfile);

    expect(savedProfile).toHaveProperty('name', mockProfile.name);
    expect(savedProfile).toHaveProperty('sex', mockProfile.sex);

  });

});