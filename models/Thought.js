const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction'); // Import Reaction model

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  reactions: [Reaction.schema] // Embed Reaction schema as an array
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;



