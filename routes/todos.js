const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/todo", (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      res.json({ status: false, error: "Error getting todo! :(" });
      return;
    } else {
      res.json({ status: true, todo: todos });
    }
  });
});

router.post("/todo", (req, res) => {
  var todo = new Todo(req.body);
  todo.save((err, todo) => {
    if (err) {
      res.json({ status: false, error: "Error creating todo! :(" });
    } else {
      res.json({ status: true, message: "Saved!" });
    }
  });
});

//TODO: Set put route for todo and set delete by :id
router.put("/todo/:id", (req, res) => {
  var completed = req.body.completed;
  Todo.findById(req.params.id, (err, todo) => {
    todo.completed = completed;
    todo.save((err, todo) => {
      if (err) {
        res.json({ status: false, error: "Status not updated! :(" });
      } else {
        res.json({ status: true, message: "Status updated!" });
      }
    });
  });
});

router.delete("/todo/:id", (req, res) => {
  Todo.remove({ _id: req.params.id }, (err, todo) => {
    if (err) {
      res.json({ status: false, error: "Did not delete! :(" });
    } else {
      res.json({ status: true, error: "Todo Deleted!" });
    }
  });
});

module.exports = router;
