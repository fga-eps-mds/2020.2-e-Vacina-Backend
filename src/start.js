const app = require('./server.js');
const mongoose = require('mongoose');

let db_path = 'mongodb://mongodb:27017/e-vacina';

if(process.argv.includes('-production'))
    db_path = `mongodb+srv://e-vacina-cluster:${process.env.DB_PASSWORD}@${process.env.DB_USERNAME}.ujfqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`



mongoose.connect(db_path, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
},


(err) => {
    if (!err) {
        console.log('Successfully Established Connection with Database')
    }
    else {
        console.log('Failed to Establish Connection with Database with Error: '+ err)
    }
});


const port = process.env.PORT || 3000; // whatever is in the environment variable PORT, or 3000 if there's nothing there.
app.listen(port, ()=> {
    console.log("Listening on port: " + port);
});