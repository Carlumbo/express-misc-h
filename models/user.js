var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  email: String,
  password: String,
});

//third_party_auth: third_party_auth,
var User = mongoose.model("User", UserModelSchema);

module.exports = User;
