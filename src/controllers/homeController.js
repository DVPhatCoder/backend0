const connection = require("../config/database")

const getHomePage = (req, res) => {
 return res.render("homePage.ejs");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getSample,
};
