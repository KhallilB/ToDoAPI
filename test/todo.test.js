const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const mocha = require("mocha");
const sinon = require("sinon");
const mongoose = require("mongoose");
require("sinon-mongoose");

const ToDo = require("../models/Todo"); //TODO Model

//Test GET
describe("get all todos", () => {
  //Get All Todos
  it("should return all todos", done => {
    var ToDoMock = sinon.mock(ToDo);
    var result = { status: true, todo: [] };

    ToDoMock.expects("find").yields(null, result);
    ToDo.find((err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        ToDoMock.verify();
        ToDoMock.restore();
        expect(result.status).to.be.true;
        done();
      }
    });
  });

  //Fail to get Todo
  it("should return error", done => {
    var ToDoMock = sinon.mock(ToDo);
    var result = { status: false, todo: [] };

    ToDoMock.expects("find").yields(null, result);
    ToDo.find((err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        ToDoMock.verify();
        ToDoMock.restore();
        expect(result.status).to.not.be.true;
        done();
      }
    });
  });
});

//Test POST
describe("post a new todo", () => {
  //creates a new todo
  it("should post a new todo", done => {
    var ToDoMock = sinon.mock(new ToDo({ todo: "New Task" }));
    var todo = ToDoMock.object;
    var result = { status: true };

    ToDoMock.expects("save").yields(null, result);
    todo.save((err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        ToDoMock.verify();
        ToDoMock.restore();
        expect(result.status).to.be.true;
        done();
      }
    });
  });
  //Throws error if not saved
  it("should return err if not saved", done => {
    var ToDoMock = sinon.mock(new ToDo({ todo: "New Task" }));
    var todo = ToDoMock.object;
    var result = { status: false };

    ToDoMock.expects("save").yields(null, result);
    todo.save((err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        ToDoMock.verify();
        ToDoMock.restore();
        expect(result.status).to.not.be.true;
        done();
      }
    });
  });
});

//Test UPDATE
describe("updates a todo", () => {
  //Updates todo by id
  it("should update a todo by id", done => {
    var ToDoMock = sinon.mock(new ToDo({ completed: true }));
    var todo = ToDoMock.object;
    var result = { status: true };

    ToDoMock.expects("save")
      .withArgs({ _id: 1 })
      .yields(null, result);
    todo.save((err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        ToDoMock.verify();
        ToDoMock.restore();
        expect(result.status).to.be.true;
        done();
      }
    });
  });

  //Check if failed
  it("returns an error if not updated", done => {
    var ToDoMock = sinon.mock(new ToDo({ completed: true }));
    var todo = ToDoMock.object;
    var result = { status: true };

    ToDoMock.expects("save")
      .withArgs({ _id: 1 })
      .yields(null, result);
    todo.save((err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        ToDoMock.verify();
        ToDoMock.restore();
        expect(result.status).to.be.true;
        done();
      }
    });
  });
});
