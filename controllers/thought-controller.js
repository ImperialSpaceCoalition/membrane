// controllers/thought-controller.js
const { Thought } = require('../models/Thought');

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
  }
};

module.exports = thoughtController;

