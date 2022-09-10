const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: false,
  },
},{timestamps : true
});

const membership = mongoose.model("MEMBERSHIP", userSchema);
module.exports = membership;
