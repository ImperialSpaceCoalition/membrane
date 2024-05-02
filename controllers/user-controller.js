// controllers/user-controller.js
const { User } = require('../models/User');

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
  }
};

module.exports = userController;

