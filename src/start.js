const app = require('./server.js');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://e-vacina-team:${process.env.DB_PASSWORD}@${process.env.DB_USERNAME}.be4j5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
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


const port = 3000 || process.env.PORT; // whatever is in the environment variable PORT, or 3000 if there's nothing there.
app.listen(3000, ()=> {
    console.log("Listening on port: " + port);
});