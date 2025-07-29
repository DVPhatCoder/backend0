require('dotenv').config() 
const express = require('express')
const path = require('path');
const app = express()
const webRoutes = require('./routes/web')
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database') 


const port = process.env.PORT || 8888

//configViewEngine
configViewEngine(app)

app.use('/',webRoutes)

//simple connection
connection.query(
  'SELECT * from Users u',
  function (err, results) {
    console.log(">>results: ",results); // results contains rows returned by server
  }
);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
