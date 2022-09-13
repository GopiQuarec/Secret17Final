const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
    },
  },
);

// collection creation
const membership = mongoose.model("MEMBERSHIP", membershipSchema);
module.exports = membership;
