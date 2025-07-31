const connection = require("../config/database");
const {getAllUsers, getUpdateUser, updeateUserById, deleteUserById} = require('../services/CRUDService')

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
const getUpdatePage= async(req,res)=>{
    const userId = req.params.id;
    let user =  await getUpdateUser(userId)
   res.render('edit.ejs',{userEdit: user})
};

const postUpdateUser = async(req,res)=>{
  let { name, email, city, userId } = req.body;
  await updeateUserById(name, email, city, userId)
  // res.send("Update user successfully");
  res.redirect('/')
}
const postDeleteUser = async (req,res)=>{
    const userId = req.params.id;
    let user =  await getUpdateUser(userId)
   res.render('deleteUser.ejs',{userEdit: user})
}
const postHandlerRemoveUser = async (req,res)=>{
  const id = req.body.userId
  await deleteUserById(id)
  res.redirect('/')
}

module.exports = {
  getHomePage,
  getSample,
  postCreateUser,
  getCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandlerRemoveUser
};
