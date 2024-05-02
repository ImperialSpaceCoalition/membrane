const Thought = require('../models/Thought');

const thoughtController = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  },

  // Update an existing thought
updateThought(req, res) {
  Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
}
};

module.exports = thoughtController;


