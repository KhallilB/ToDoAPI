const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");
const Todos = require("../controller/todos");

router.get("/todo", Todos);

router.post("/todo", Todos);

router.delete("/todo/:id", Todos);

router.put("/todo/:id", Todos);

module.exports = router;
