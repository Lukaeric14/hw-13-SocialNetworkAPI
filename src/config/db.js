const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social_network', {
          useNewUrlParser: true,
          useUnifiedTopology: true
    });
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to DB");
  }
};

mongoose.set('debug', true);

module.exports = connectDB;
