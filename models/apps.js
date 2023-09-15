const mongoose = require("mongoose");

const appsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  tab_name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Apps = mongoose.model("Apps", appsSchema);

module.exports = Apps;
