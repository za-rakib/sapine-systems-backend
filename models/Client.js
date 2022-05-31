const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: String,
    },
    email: {
      type: String,
    },
    status: {
      type: String,
    },
    source: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Client", ClientSchema);
