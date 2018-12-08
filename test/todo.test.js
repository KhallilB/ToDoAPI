// const chai = require("chai");
// const should = chai.should();
// const expect = chai.expect;
// const mocha = require("mocha");
// const sinon = require("sinon");
// const mongoose = require("mongoose");
// require("sinon-mongoose");

// const ToDo = require("../models/Todo"); //TODO Model

// //Test GET
// describe("get all todos", () => {
//   //Get All Todos
//   it("should return all todos", done => {
//     var ToDoMock = sinon.mock(ToDo);
//     var result = { status: true, todo: ["Task 1", "Task 2", "Task 3"] };

//     ToDoMock.expects("find")
//       .once()
//       .yields(null, result);
//     ToDo.find((err, result) => {
//       if (err) {
//         console.log(`Error: ${err}`);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.be.true;
//         console.log(result.todo);
//         done();
//       }
//     });
//   });

//   //Fail to get Todo
//   it("should return error", done => {
//     var ToDoMock = sinon.mock(ToDo);
//     var result = { status: false, todo: ["Task 1", "Task 2", "Task 3"] };

//     ToDoMock.expects("find")
//       .once()
//       .yields(null, result);
//     ToDo.find((err, result) => {
//       if (err) {
//         console.log(`Error: ${err}`);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.not.be.true;
//         console.log(err);
//         done();
//       }
//     });
//   });
// });

// //Test POST
// describe("post a new todo", () => {
//   //creates a new todo
//   it("should post a new todo", done => {
//     var ToDoMock = sinon.mock(
//       new ToDo({ _id: 1, todo: "New Task", completed: false })
//     );
//     var todo = ToDoMock.object;
//     var result = { status: true };

//     ToDoMock.expects("save")
//       .once()
//       .yields(null, result);
//     todo.save((err, result) => {
//       if (err) {
//         console.log(`Error: ${err}`);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.be.true;
//         console.log(todo.todo);
//         done();
//       }
//     });
//   });

//   //Throws error if not saved
//   it("should return err if not saved", done => {
//     var ToDoMock = sinon.mock(
//       new ToDo({ _id: 1, todo: "New Task", completed: false })
//     );
//     var todo = ToDoMock.object;
//     var result = { status: false };

//     ToDoMock.expects("save")
//       .once()
//       .yields(null, result);
//     todo.save((err, result) => {
//       if (err) {
//         console.log(`Error: ${err}`);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.not.be.true;
//         console.log(err);
//         done();
//       }
//     });
//   });
// });

// //Test UPDATE
// describe("updates a todo", () => {
//   it("should update a todo by id", done => {
//     var ToDoMock = sinon.mock(
//       new ToDo({ _id: 1, todo: "Completed Task", completed: true })
//     );
//     var todo = ToDoMock.object;
//     var result = { status: true };
//     // var update = ToDo.findByIdAndUpdate();

//     ToDoMock.expects("save")
//       .withArgs({ _id: 1, todo: "Updated Task", completed: false })
//       .once()
//       .yields(null, result);
//     todo.save((err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.be.true;
//         done();
//       }
//     });
//   });

//   it("should throw error if not updated", done => {
//     var ToDoMock = sinon.mock(
//       new ToDo({ _id: 1, todo: "Completed Task", completed: true })
//     );
//     var todo = ToDoMock.object;
//     var result = { status: false };

//     ToDoMock.expects("save").withArgs({
//       _id: 1,
//       todo: "Updated Task",
//       completed: true
//     });
//     todo.save((err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.not.be.true;
//         done();
//       }
//     });
//   });
// });

// //Test DELETE
// describe("deletes a todo", () => {
//   //Deletes todo by id
//   it("should delete todo by id", done => {
//     var ToDoMock = sinon.mock(
//       new ToDo({ _id: 1, todo: "Task", completed: false })
//     );
//     var todo = ToDoMock.object;
//     var result = { status: true };

//     ToDoMock.expects("remove")
//       .withArgs({ _id: 1 })
//       .once()
//       .yields(null, result);
//     todo.remove((err, result) => {
//       if (err) {
//         console.log(`Error: ${err}`);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.be.true;
//         done();
//       }
//     });
//   });

//   //Throws error if not deleted
//   it("returns error if not deleted", done => {
//     var ToDoMock = sinon.mock(
//       new ToDo({ _id: 1, todo: "Task", completed: false })
//     );
//     var todo = ToDoMock.object;
//     var result = { status: false };

//     ToDoMock.expects("delete")
//       .withArgs({ _id: 1 })
//       .once()
//       .yields(null, result);
//     todo.delete((err, result) => {
//       if (err) {
//         console.log(`Error: ${err}`);
//       } else {
//         ToDoMock.verify();
//         ToDoMock.restore();
//         expect(result.status).to.not.be.true;
//         done();
//       }
//     });
//   });
// });
