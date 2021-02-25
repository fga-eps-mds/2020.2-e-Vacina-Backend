const express = require('express');
const app = express();
const router = express.Router();

app.use(router);
app.get('/', (req, res) => {
    res.send("Oi gostasaaa");
})


port = 8000;
app.listen(port || process.env.PORT, () => {console.log("Listening on port " + port)});