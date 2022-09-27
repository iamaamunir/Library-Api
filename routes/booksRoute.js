const express = require("express");
const bookRoute = express.Router();

const bookModel = require("../model/booksModel");
const userModel = require("../model/userModel");

// CREATE BOOK BY ADMIN

bookRoute.post("/createbook/:id", (req, res) => {
  const { userType: type, bookDetails: book } = req.body;
  const id = req.params.id;
  let role;
  for (let key in type) {
    role = type[key];
  }
  userModel
    .findById(id)
    .then((user) => {
      if (user.Role == role) {
        bookModel
          .create(book)
          .then((book) => {
            res.status(201).send({
              message: "Book Created",
              data: book,
            });
          })
          .catch((err) => {
            res.status(500).send({
              message: "Book not created",
              data: err,
            });
          });
      }
      if (user.Role !== role) {
        res.status(400).send({
          message: "Unauthorize",
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: "User not found",
        data: err,
      });
    });
});

// DELETE BOOK ROUTE

// bookRoute.use((req, res, next) => {
//   const body = req.body;
//   console.log(`${body.role} mvmv`);

//   userModel.find({ Role: "admin" }).then((users) => {
//     console.log(users)
//     console.log(users.Role)
//     if (users.Role == body.role) {
//       console.log("We are here");
//       next();
//     } else {
//       console.log("Unable");
//       res.status(400).send({
//         message: "Unauthorized",
//       });
//     }
//   });
// });

bookRoute.delete("/deletebook:/id", (req, res) => {
  const id = req.params.id;
  bookModel
    .findByIdAndDelete(id)
    .then((book) => {
      res.status(200).send({
        message: "Book Deleted successfully",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Book not found",
      });
    });
});

module.exports = bookRoute;
