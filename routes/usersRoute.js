const express = require("express");

const userModel = require("../model/userModel");

const userRoute = express.Router();

// CREATE USER
userRoute.post("/createuser", (req, res) => {
  const user = req.body;
  userModel
    .create(user)
    .then((user) => {
      res.status(201).send({
        message: "User added successfully",
        data: user,
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

/////////////////////////////////////////////////////

// Authentication User (Login)

userRoute.post("/authenticateuser/:id", (req, res) => {
  const id = req.params.id;
  const loginDetails = req.body;

  userModel
    .findById(id)
    .then((user) => {
      if (
        user.Password == loginDetails.Password &&
        user.Username == loginDetails.Username
      ) {
        res.status(200).send(user);
      } else {
        res.status(400).send({
          message: "User does not exist",
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

////////////////////////////////////////////////

// Get all users by admin

userRoute.get("/allusers/:id", (req, res) => {
  const id = req.params.id;
  return new Promise((resolve, reject) => {
    userModel
      .findById(id)
      .then((user) => {
        if (user.Role == "Admin") {
          userModel.find().then((users) => {
            res.status(200).send(users);
            resolve();
          });
        } else {
          res.status(400).send();
          reject();
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
});

module.exports = userRoute;
