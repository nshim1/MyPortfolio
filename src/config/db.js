// Do not expose your credentials in your code.
let atlasDB =
  "mongodb+srv://nshim1:nshim1@academic.sghii0v.mongodb.net/portfolio?retryWrites=true&w=majority";

// Database setup
let mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(atlasDB);
  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error:"));
  mongodb.once("open", () => {
    console.log("===> Connected to MongoDB.");
  });

  return mongodb;
};
