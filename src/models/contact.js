let mongoose = require("mongoose");

let ContactSchema = mongoose.Schema(
  {
    name: String,
    number: Number,
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "contact",
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
