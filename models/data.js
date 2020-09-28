var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DataModelSchema = new Schema({
  type: String,
  datapoint: Number,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

var Data = mongoose.model("Data", DataModelSchema);

module.exports = Data;
