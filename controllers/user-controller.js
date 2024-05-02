const { User } = require('../models/User');

const userController = {
  getAllUsers(req, res) {
    return User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  // Other controller methods...
};

module.exports = userController;
