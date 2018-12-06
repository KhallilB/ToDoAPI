const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
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

const ToDoModel = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDoModel;
