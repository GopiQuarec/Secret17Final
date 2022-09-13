const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  created_date:{
    type: Date,
  }
},{timestamps : true
});

const membership = mongoose.model("MEMBERSHIP", userSchema);
module.exports = membership;
