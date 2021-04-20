const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const User = require('../models/User');
const request = supertest(app);

const user = {
  email: "50cent@gmail.com",
  password: "naruto",
  phoneNumber: "69948482948"
}

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
  

  it('Should authenticate user', async() => {
    await request.post('/user').send(user);
    const response = await request.post('/auth/login').send({email:user.email, password: user.password});
    expect(response.status).toBe(200);
  });

  it('Should fail to authenticate user', async() => {
    await request.post('/user').send(user);
    const response = await request.post('/auth/login').send({email:user.email, password: 'Wrong Password'});
    expect(response.status).toBe(400);
  });



});