var session = require("express-session");
var cookieParser = require("cookie-parser");
const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var MongoStore = require("connect-mongo")(session);
var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://superadmin:120622@cluster0.8lc0y.mongodb.net/express-msic?retryWrites=true&w=majority";
var db = mongoose.connection;

module.exports = (app) => {
  app.use(cookieParser());

  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(
    session({
      secret: "very secret this is",
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

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
    new LocalStrategy({ email: "email" }, (email, password, done) => {
      // Match User
      db.User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            alert("No User found");
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

  app.use(passport.initialize());
  app.use(passport.session());
};