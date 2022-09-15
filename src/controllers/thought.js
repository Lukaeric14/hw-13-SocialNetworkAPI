const Thought = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find({});
      return res.json(thoughts);
    } catch (err) {
      console.log("Error getting all thoughts", err);
      res.status(500).send(err.message);
    }
  },
  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });
      if (!thought) {
        return res.status(404).send("No thought found");
      }
      return res.json(thought);
    } catch (err) {
      console.log("Error getting thought by id", err);
      res.status(500).send(err.message);
    }
  },
  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      return res.json(thought);
    } catch (err) {
      console.log("Error creating thought", err);
      res.status(500).send(err.message);
    }
  },
  updateThought: async (req, res) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).send("No thought found");
      }
      return res.json(thought);
    } catch (err) {
      console.log("Error updating thought", err);
      res.status(500).send(err.message);
    }
  },
};
