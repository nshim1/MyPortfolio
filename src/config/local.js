const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = function () {
  passport.use(
    // incase it's done ->
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, {
            message: "Unknown user",
          });
        }

        if (!user.authenticate(password)) {
          /*null : error object false : user object*/
          return done(null, false, {
            message: "Invalid password",
          });
        }

        return done(null, user);
      });
    })
  );
};
