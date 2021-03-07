const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb://mongodb:27017/e-vacina', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
},
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});



app.get('/', (req, res) => {
  res.send("Hello, from docker container");
})


app.use(express.json());
app.use(cors());

server.listen(3000);