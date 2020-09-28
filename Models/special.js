var mongoose = require("mongoose");

var Schema = Mongoose.schema;

var UserModelSchema = new Schema({
  username: String,
  email: String,
  a_date: Date,
});

var PostModelSchema = new Schema({
  body: String,
  user_id: Number,
});

var UserModel = mongoose.model("UserModel", "UserModelSchema");

var PostModel = mongoose.model("UserModel", "UserModelSchema");
