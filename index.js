const express = require('express')
var bodyParser = require('body-parser')
const User = require('./models/user')
require("./models")
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




app.get('/', function (req, res) {
  res.send('Hello World')
})


User.sync({ force: true });

app.listen(3000, () =>{
    console.log(`your port run is 3000`);
})