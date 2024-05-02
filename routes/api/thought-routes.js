// routes/api/thought-routes.js
const router = require('express').Router();
const { getAllThoughts, 
  createThought, 
  updateThought, 
  deleteThought,
  addReaction, 
  removeReaction 
} = require('../../controllers/thought-controller');

// GET all thoughts
router.get('/', getAllThoughts);

// POST a new thought
router.post('/', createThought);

// Update thought
router.put('/:id', updateThought);

//Delete thought
router.delete('/:id', deleteThought);

router.get('/', getAllThoughts);

router.route('/')
  .post(createThought);

router.route('/:id')
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);



module.exports = router;


