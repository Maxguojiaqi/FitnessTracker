var path = require("path");

module.exports = {
    Workout: require(path.join(__dirname, "/Workout")),
    Exercise: require(path.join(__dirname, "/Exercise"))
  };
  