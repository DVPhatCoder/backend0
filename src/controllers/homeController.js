const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser =  async (req, res) => {
  let { name, email, city } = req.body;
  // connection.query(
  //   "INSERT INTO Users (name, email, city) VALUES (?, ?, ?)",
  //   [name, email, city],
  //   function (err, results) {
  //     if (err) {
  //       res.send("create user failed");
  //     } else {
        
  //     }
  //   }
  // );
  const [result, fields] = await connection.query(
      "INSERT INTO Users (name, email, city) VALUES (?, ?, ?)",[name, email, city]);
  res.send("create user successfully");
};

const getCreateUser = (req, res) => {
  res.render("createUser.ejs");
};
module.exports = {
  getHomePage,
  getSample,
  postCreateUser,
  getCreateUser,
};
