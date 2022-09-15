const { Schema, Types } = require("mongoose");

const reaction = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (formatDate) =>
        `${formatDate.toLocaleDateString()}`,
    },
    username: {
      type: String,
      required: true
    }
  }
)

module.exports = reaction;