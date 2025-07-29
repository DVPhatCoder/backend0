const getHomePage = (req, res) => {
  res.send("sample");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getSample,
};
