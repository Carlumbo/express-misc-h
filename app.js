var express = require("express");
var session = require("express-session");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var MongoStore = require("connect-mongo")(session);
var cookieParser = require("cookie-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var regRouter = require("./routes/register");
var authRouter = require("./routes/auth");

var app = express();

var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://superadmin:120622@cluster0.8lc0y.mongodb.net/express-msic?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "very secret this is",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

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

var passport = require("./passport");
//require("./passport")(app);
let passportConfig = require("./passport.js");
passportConfig(passport);
// app.use(passport.initialize());
// app.use(passport.session());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/index", indexRouter);
app.use("/reg", regRouter);
app.use("/user", usersRouter);
app.use("/auth", authRouter);

module.exports = app;
