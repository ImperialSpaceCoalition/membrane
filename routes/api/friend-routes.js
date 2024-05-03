// routes/api/friend-routes.js

const router = require('express').Router();
const { addFriend, removeFriend } = require('../../controllers/friend-controller');

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
