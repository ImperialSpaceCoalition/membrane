// controllers/user-controller.js
const User = require('../models/User'); // Corrected import statement

const userController = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  }
};



module.exports = userController;

