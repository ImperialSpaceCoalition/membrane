const  Thought = require('../models/Thought');

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
},
// Delete an existing thought
deleteThought(req, res) {
  Thought.findByIdAndDelete(req.params.id)
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
},
 // Add reaction to thought
addReaction(req, res) {
  // Destructure the reaction data from req.body
  const { reactionBody, username } = req.body;

  // Check if the required fields are provided
  if (!reactionBody || !username) {
    return res.status(400).json({ message: 'Missing required fields for reaction.' });
  }

  Thought.findByIdAndUpdate(
    req.params.thoughtId,
    { $push: { reactions: { reactionBody, username } } }, // Push the new reaction to the reactions array
    { new: true, runValidators: true }
  )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(500).json(err));
},

// Remove reaction from thought
removeReaction(req, res) {
  Thought.findByIdAndUpdate(
    req.params.thoughtId,
    { $pull: { reactions: { reactionId: req.params.reactionId } } }, // Pull the reaction with the given reactionId
    { new: true }
  )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(500).json(err));
}
};



module.exports = thoughtController;


