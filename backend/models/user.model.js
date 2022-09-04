const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
        type: String,
        require: true,
      },
  },
  {
    timestamps: true,
  }
);
const dataset = mongoose.model("userdatasets", userSchema);
module.exports = dataset;
