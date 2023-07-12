const express = require('express')
var bodyParser = require('body-parser')
const { addUser, getUsers, getUser, postUsers, deleteUser, queryUser } = require('./controllers/userController')
require('./models')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/add', addUser)
app.post('/users', addUser)
app.get('/users/:id', getUser)
app.get('/delete/:id', deleteUser)
app.get('/query', queryUser)



app.listen(3000, () =>{
    console.log(`your port run is 3000`);
})