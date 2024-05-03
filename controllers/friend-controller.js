const { Friend } = require('../models/Friend');

const friendController = {
  // Add a friend
  addFriend(req, res) {
    Friend.create({ userId: req.params.userId, friendId: req.params.friendId })
      .then(dbFriendData => res.json(dbFriendData))
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  },
  
  // Remove a friend
  removeFriend(req, res) {
    Friend.findOneAndDelete({ userId: req.params.userId, friendId: req.params.friendId })
      .then(dbFriendData => res.json(dbFriendData))
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  }
};

module.exports = friendController;
