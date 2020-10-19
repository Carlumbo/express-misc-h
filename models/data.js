var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DataModelSchema = new Schema({
  type: String,
  dataPoint: Number,
  Uploader: String,
  PCorigin: String,
  Email: String,
  createdAt: String,
});

var Data = mongoose.model("Data", DataModelSchema);

module.exports = Data;
