require('dotenv').config() 
const express = require('express')
const path = require('path');
const app = express()
const webRoutes = require('./routes/web')
const configViewEngine = require('./config/viewEngine')

const port = process.env.PORT || 8888

//configViewEngine
configViewEngine(app)

app.use('/',webRoutes)

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
