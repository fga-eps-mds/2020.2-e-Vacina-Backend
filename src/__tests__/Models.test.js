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
  });

  afterAll(async () => {
    await mongoose.connection.close();
    done();
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

});