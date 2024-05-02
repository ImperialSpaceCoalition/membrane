// routes/api/user-routes.js
const router = require('express').Router();
const { getAllUsers, createUser } = require('../../controllers/user-controller');
// GET all users
router.get('/', getAllUsers);

// POST a new user
router.post('/', createUser);


module.exports = router;

