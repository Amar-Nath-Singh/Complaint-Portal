const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    desp: {
      type: String,
      require: true,
    },
    rollno: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const dataset = mongoose.model("dataset", userSchema);
module.exports = dataset;
