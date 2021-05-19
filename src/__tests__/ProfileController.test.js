const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const Profile = require('../models/Profile');
const User = require('../models/User');
const request = supertest(app);

const user = {
  email: "julinha@gmail.com",
  password: "julia123",
  phoneNumber: "61996483308"
}

const profile = {
  name: "mario",
  cpf: "077.655.698.66",
  birthDate: "09/11/2004",
  sex: "male"
}

let userId;
let token;
let profileId;

describe('Profile Controller', () => {
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
    await mongoose.connection.close();
    done();
  });

  it('should create a profile', async() => {
    userId = (await request.post('/user').send(user)).body.user._id;
    token = (await request.post('/auth/login').send({email:user.email, password:user.password})).body.token;
    const response = await request.post('/profile/'+userId).set({'Authorization': `Bearer ${token}`}).send(profile);
    profileId = response.body.newProfile._id;
    expect(response.status).toBe(200);

  });
  

  it('should fail to create a profile with repeated cpf', async() => {  
    const response = await request.post('/profile/'+userId).set({'Authorization': `Bearer ${token}`}).send(profile);
    expect(response.status).toBe(400); 

  });

  it('should fail to create a profile with repeated cpf', async() => {  
    const response = await request.post('/profile/wrongId').set({'Authorization': `Bearer ${token}`}).send(profile);
    expect(response.status).toBe(400); 

  });

  it('should get a profile by a id', async() => {

    const response = await request.get(`/profile/${profileId}`).set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(200);

  });


  it('should get a profile by a id', async() => {

    const response = await request.get(`/profile/609c27260ca2ac001e98eb12`).set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(400);

  });

  it('should list all profiles of an user', async() => {

    const response = await request.get('/profile/list/'+userId).set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(200);

  });

  it('should fail to list all profiles of an user', async() => {

    const response = await request.get('/profile/list/609c20c69f9b2f001e1b819c').set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(400);

  });

  it('should update profile', async() => {
    const update = {name: "Mariana"};
    const response = await request.get('/profile/'+profileId).set({'Authorization': `Bearer ${token}`}).send(update);
    expect(response.status).toBe(200);

  });

  it('should fail to update a profile with an existing cpf', async() => {

    const newProfile = {
      name: "Carlos",
      cpf: "053.323.540.44",
      birthDate: "05/14/1980",
      sex: "male"
    }

    await request.post('/profile/'+userId).set({'Authorization': `Bearer ${token}`}).send(newProfile);
    const update = {cpf: newProfile.cpf};
    const response = await request.post('/profile/'+profileId).set({'Authorization': `Bearer ${token}`}).send(update);
    expect(response.status).toBe(400);

  });

  it('should fail to delete profile', async() => {
    const response = await request.delete('/profile/wrongId/user/'+userId).set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(400);
  });

  it('should fail to delete profile', async() => {
    const response = await request.delete('/profile/609c27260ca2ac001e98eb12/user/'+userId).set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(400);
  });

  it('should fail to delete profile', async() => {
    const response = await request.delete('/profile/'+profileId+'/user/609c20c69f9b2f001e1b819c').set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(400);
  });

  it('should fail to delete profile', async() => {
    const newUser = {
      email: "maria_onet@gmail.com",
      phoneNumber: "333 444 555",
      password:"senha"
    }

    const savedUser = await request.post('/user').send(newUser);
    const savedUserId = savedUser.body.user._id;
    const token = (await request.post('/auth/login').send({email:newUser.email, password:newUser.password})).body.token;

    const newProfile = {
      name: "Maria",
      birthDate: "03/03/2000",
      cpf: "309403943344",
      sex: 'Female'
    }

    const savedProfile = await request.post('/profile/' + savedUserId).set({'Authorization': `Bearer ${token}`}).send(newProfile);
    const newProfileId = savedProfile.body.newProfile._id;

    const response = await request.delete('/profile/'+newProfileId+'/user/'+userId).set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(400);

  })

  it('should delete a profile', async() => {
    const response = await request.delete('/profile/'+profileId+'/user/'+userId).set({'Authorization': `Bearer ${token}`});
    expect(response.status).toBe(200);
  });



});