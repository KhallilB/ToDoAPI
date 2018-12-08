const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//AUTH MODEL

//GET SIGNUP FORM
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

module.exports = router;
