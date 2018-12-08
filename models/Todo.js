const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  todo: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Date,
    default: Date.now
  }
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
