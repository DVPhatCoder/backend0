const connection = require("../config/database");
const {getAllUsers} = require('../services/CRUDService')

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("homePage.ejs",{listUsers: results});
};
const getSample = (req, res) => {
  res.render("sample.e  njs");
};
const postCreateUser = async (req, res) => {
  let { name, email, city } = req.body;
  const [result, fields] = await connection.query(
    "INSERT INTO Users (name, email, city) VALUES (?, ?, ?)",
    [name, email, city]
  );
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
