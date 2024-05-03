// routes/api/user-routes.js
const router = require('express').Router();
const { getAllUsers, 
  createUser, 
  updateUser, 
  deleteUser,
  addFriend,
  removeFriend 
} = require('../../controllers/user-controller');


router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);




// GET all users
router.get('/', getAllUsers);

// POST a new user
router.post('/', createUser);

// Update a User
router.put('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);



module.exports = router;

