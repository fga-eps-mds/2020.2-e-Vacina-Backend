const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const routes = require('./routes/BaseRoute');
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




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

const port = 3000 || process.env.PORT; // whatever is in the environment variable PORT, or 3000 if there's nothing there.
server.listen(3000, ()=> {
    console.log("Listening on port: " + port);
});