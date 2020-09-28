var express = require("express");
var router = express.Router();
const User = require("../models/user");
user;
// ROUTE FOR READ
router.get("/", (req, res) => {
  User.find((err, docs) => {
    if (err) throw err;
    // console.log(docs);
    res.render("home", {
      teams: docs,
    });
  }).catch((err) => {
    console.log(err);
  });
});

// ROUTE FOR CREATE
router.post("/create", (req, res, next) => {
  const { username, email, a_date } = req.body;
  console.log(username, email, a_date);
  const user = new User({
    username,
    email,
    a_date,
  });
  user.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

router.get("/edit/:id", (req, res, next) => {
  console.log(req.params.id);
  // res.send(req.params.id);
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      console.log(docs);

      console.log(docs.name);

      // console.log(docs._id);

      res.render("edit", { user: docs });
    }
  );
});

router.get("/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
