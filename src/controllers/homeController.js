const getHomePage = (req, res) => {
  res.render("sample.ejs");
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

module.exports = {
  getHomePage,
  getABC,
};
