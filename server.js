const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");

const todos = require("./routes/todos");
const auth = require("./routes/auth");

const app = express();

app.use(cors());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use("/", todos);
app.use("/api", todos);
app.use("/auth", auth);

mongoose.connect(
  "mongodb://localhost/ToDoAPI",
  { useNewUrlParser: true }
);

port = process.env.Port || 3000;
app.listen(port, () => {
  console.log("App listening on port: " + port);
});
