const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const User = require('../models/User');
const request = supertest(app);

const user = {
  email: 'cd.santos.360@gmail.com',
  password: 'super_password',
  phoneNumber: '61992719513'
}


const user_2 = {
  email: 'geraldo@gmail.com',
  password: 'putzman12',
  phoneNumber: '61998461300'
}

let id;
let token;

describe('User Controller', () => {
  beforeAll(async() => {
    mongoose.connect(global.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    }); 
  });

  afterAll(async () => {
    await mongoose.connection.close();
    done();
  });

  it('Should save a new user in db and return it', async() => {
    const response =  await request.post('/user').send(user);
    id = response.body.user._id;
    expect(response.status).toBe(200);
  });

  it('Should fail to save a new user with a repeated email', async() => {
    const response = await request.post('/user').send(user);
    expect(response.status).toBe(400);
  });

  it('Should get user by ID', async() => {
    const response = await request.get(`/user/${id}`);
    expect(response.status).toBe(200);
  });


  it('Should list users', async() => {
    const response = await request.get('/user');
    expect(response.status).toBe(200);
  });

  it('Should be able to update user', async() => {
    token = (await request.post('/auth/login').send({email: user.email, password: user.password})).body.token;
    const response = await request.put(`/user/${id}`).set({'Authorization':`Bearer ${token}`}).send({password: "best_password_ever"});
    expect(response.status).toBe(200);
  });

  it('Should fail to update user with already existing email', async() => {
    await request.post('/user').send(user_2);

    const update = {email: user_2.email};
    const response = await request.put(`/user/${id}`).set({'Authorization':`Bearer ${token}`}).send(update);
    
    expect(response.status).toBe(400);
  });

  it('Should fail to update user with already existing email', async() => {
    const response = await request.put(`/user/wrongId`).set({'Authorization':`Bearer ${token}`}).send({password: "best_password_ever"});
    expect(response.status).toBe(400);
  });


  it('Should failt to delete user', async() => {
    const response = await request.delete(`/user/wrongId`).set({'Authorization':`Bearer ${token}`});
    expect(response.status).toBe(400);
  });

  it('Should delete user', async() => {
    const response = await request.delete(`/user/${id}`).set({'Authorization':`Bearer ${token}`});
    
    expect(response.status).toBe(200);
  });
  

});