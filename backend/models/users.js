const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  username: { type: String, required: [true, "Username is required"] },
  password: { type: String, required: [true, "Password is required"] },
});

module.exports = mongoose.model("users", userSchema);
