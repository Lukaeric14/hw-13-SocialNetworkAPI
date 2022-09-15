const { Schema, Types, model } = require("mongoose");
const reaction = require("./Reaction");

const thought = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (formatDate) =>
      `${formatDate.toLocaleDateString()} ${formatDate.toLocaleTimeString()}`,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reaction],
});

thought.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = model("Thought", thought);
