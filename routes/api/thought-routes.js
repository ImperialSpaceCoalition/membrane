// routes/api/thought-routes.js
const router = require('express').Router();
const { getAllThoughts, createThought, updateThought } = require('../../controllers/thought-controller');

// GET all thoughts
router.get('/', getAllThoughts);

// POST a new thought
router.post('/', createThought);

// Update thought
router.put('/:id', updateThought);



module.exports = router;


