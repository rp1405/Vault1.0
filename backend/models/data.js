const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  username: { type: String, required: [true, "Username is required"] },
  data: { type: String, required: false },
});

module.exports = mongoose.model("datas", dataSchema);
