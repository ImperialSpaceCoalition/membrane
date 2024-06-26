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
  },
  // Update an existing user
updateUser(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
},
// Delete an existing user
deleteUser(req, res) {
  User.findByIdAndDelete(req.params.id)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
},
// Add a friend to a user's friend list
addFriend(req, res) {
  User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
  )
  .then(dbUserData => {
      if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
      }
      res.json(dbUserData);
  })
  .catch(err => res.status(500).json(err));
},
// Remove a friend from a user's friend list
removeFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: req.params.friendId } },
    { new: true }
  )
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(500).json(err));
}
};



module.exports = userController;

