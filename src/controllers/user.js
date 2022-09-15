const Thoughts = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      return res.json(users);
    } catch (err) {
      console.log("Error getting all users", err);
      res.status(500).send(err.message);
    }
  },
  getByUserId: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (!user) {
        return res.status(404).send("No User for this id exists");
      }
      return res.json(user);
    } catch (err) {
      console.log("Error getting User by Id", err);
      res.status(500).send(err.message);
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      console.log("Error creating user", err);
      res.status(500).send(err.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).send("No User for this id exists");
      }
      res.json(user);
    } catch (err) {
      console.log("Error updating user", err);
      res.status(500).send(err.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });
      if (!user) {
        return res.status(404).send("No User for this id exists");
      }
      await Thoughts.deleteMany({ _id: { $in: user.thoughts } });
      return res.json(user);
    } catch (err) {
      console.log("Error deleting user", err);
      res.status(500).send(err.message);
    }
  },
  addFriend: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).send("No User for this id exists");
      }
      res.json(user);
    } catch (err) {
      console.log("Error adding friend", err);
      res.status(500).send(err.message);
    }
  },
  deleteFriend: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).send("No User for this id exists");
      }
      res.json(user);
    } catch (err) {
      console.log("Error deleting friend", err);
      res.status(500).send(err.message);
    }
  },
};
