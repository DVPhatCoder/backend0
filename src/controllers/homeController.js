const connection = require("../config/database")

const getHomePage = (req, res) => {
  //simple connection
connection.query(
  'SELECT * from Users u',
  function (err, results) {
    console.log(">>results: ",results); // results contains rows returned by server
    res.send(JSON.stringify(results))
  }
);
  
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getSample,
};
