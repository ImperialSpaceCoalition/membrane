// routes/api/thought-routes.js
const router = require('express').Router();
const { getAllThoughts } = require('../../controllers/thought-controller');

// GET all thoughts
router.get('/', getAllThoughts);

module.exports = router;


