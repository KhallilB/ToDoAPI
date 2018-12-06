const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");

const app = express();

app.use(cors());
app.use(morgan("dev")); // log every request to the console
app.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json
app.use(methodOverride());

mongoose.connect(
  "mongodb://localhost/ToDoAPI",
  { useNewUrlParser: true }
);

app.listen(3000, () => {
  console.log("App listening on port: " + 3000);
});
