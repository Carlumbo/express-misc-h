var express = require("express");
var session = require("express-session");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var MongoStore = require("connect-mongo")(session);
var cookieParser = require("cookie-parser");

var app = express();

var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://superadmin:120622@cluster0.8lc0y.mongodb.net/express-msic?retryWrites=true&w=majority";
// console.log(mongoose.connection);

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
// console.log(db);
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
app.get("/app.exe", (req, res) => {
  res.download(path.join(__dirname, "./app.exe"));
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var regRouter = require("./routes/register");
var authRouter = require("./routes/auth");

app.use("/index", indexRouter);
app.use("/reg", regRouter);
app.use("/user", usersRouter);
app.use("/auth", authRouter);
app.get("/app.exe", function (req, res) {
  res.download(path.join(__dirname, "./app.exe"));
});

module.exports = app;
