var mongoose = require("mongoose");

var Schema = Mongoose.schema;

var UserModelSchema = new Schema({
  username: String,
  email: String,
  a_date: Date,
});

var UserModel = mongoose.model("UserModel", "UserModelSchema");
