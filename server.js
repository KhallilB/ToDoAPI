const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");

const todos = require("./api/routes/todos");
const users = require("./api/routes/users");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));

app.use("/todos", todos);
app.use("/users", users);

//Error Handling
app.use((req, res) => {
  const error = new Error("Not Found");
  error.status("404");
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

mongoose.connect(
  "mongodb://localhost/ToDoAPI",
  { useNewUrlParser: true }
);

port = process.env.Port || 3000;
app.listen(port, () => {
  console.log("App listening on port: " + port);
});
