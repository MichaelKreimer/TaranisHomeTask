const express = require("express");
const router = express.Router();
const User = require("../models/user");
router.post('/statistics',(req, res, next) => {

})
router.get("", (req, res, next) => {
    const userName = req.query.userName;
    const userQuery = User.find();
    let fetchedUsers;
    userQuery
      .then(documents => {
        fetchedUsers = documents;
        return User.count();
      })
      .then(count => {
        res.status(200).json({
          message: "Users fetched successfully!",
          users: fetchedUsers,
        });
      });
  });