const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/uniondb";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = connectToDatabase;
