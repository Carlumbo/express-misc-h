var session = require("express-session");

const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var MongoStore = require("connect-mongo")(session);

//console.log("cp2"); // Match User
module.exports = (app) => {
  var mongoose = require("mongoose");
  var mongoDB =
    "mongodb+srv://superadmin:120622@cluster0.8lc0y.mongodb.net/express-msic?retryWrites=true&w=majority";
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });
  passport.use(
    new LocalStrategy({ usernameField: "email" }, function (
      email,
      password,
      done
    ) {
      console.log(`${email}  , ${password}`);
      db.User.findOne({ email: email })
        .then((user) => {
          if (!user) {
          } else {
            if (user.password === password) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Wrong Password" });
            }
          }
        })
        .catch((err) => {
          return done(null, false, { message: err });
        });
    })
  );

  passport.initialize();
  passport.session();
};
