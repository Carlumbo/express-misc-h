var mongoose = require("mongoose");

var Schema = Mongoose.schema;

var PostModelSchema = new Schema({
  body: String,
  user_id: Number,
});

var PostModel = mongoose.model("UserModel", "UserModelSchema");
