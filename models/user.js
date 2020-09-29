var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

var User = mongoose.model("User", UserModelSchema);

module.exports = User;
