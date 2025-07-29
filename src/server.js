require('dotenv').config() 
const express = require('express')
const path = require('path');
const app = express()
const webRoutes = require('./routes/web')
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database') 

const port = process.env.PORT || 8888

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configViewEngine
configViewEngine(app)

app.use('/',webRoutes)

//simple connection
// connection.query(
//   'SELECT * from Users u',
//   function (err, results) {
//     console.log(">>results: ",results); // results contains rows returned by server
//   }
// );
const connectionDB = async () => {
  try {
    const [results] = await connection.query('SELECT * FROM Users');
    console.log(">> Kết nối thành công. Dữ liệu Users:", results);
  } catch (error) {
    console.error("Lỗi khi kết nối MySQL:", error.message);
  }
};
connectionDB();
app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
