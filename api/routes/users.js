const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../../models/User");

router.post("/signup", (req, res) => {
  User.find({ email: req.body.email }).then(user => {
    if (user.length >= 1) {
      return res.status(422).json({
        message: "Email already exsits."
      });
    } else {
      bcrypt.hash(req.body.email, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          const user = new User({
            email: req.body.email,
            password: hash
          });
          user
            .save()
            .then(user => {
              res.status(201).json({
                message: "User Created!"
              });
              console.log(user);
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
        }
      });
    }
  });
});

router.delete("/:id", (req, res) => {
  User.remove({ _id: req.params.id })
    .then(res => {
      res.status(200).json({
        message: "User Deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
