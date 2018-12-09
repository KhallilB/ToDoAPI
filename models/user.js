const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  usernmae: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
