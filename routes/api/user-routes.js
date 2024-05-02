// routes/api/user-routes.js
const router = require('express').Router();
const { getAllUsers } = require('../../controllers/user-controller');

// GET all users
router.get('/', getAllUsers);

module.exports = router;

