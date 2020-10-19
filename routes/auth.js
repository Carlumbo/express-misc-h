const express = require("express");
const router = express.Router();
const passport = require("passport");
const { route } = require(".");

// router.post("/login", (res, req) => {
//   console.log(req.data);
// });

// router.post("/login", passport.authenticate("local"), function (req, res) {
//   console.log(req);
//   If this function gets called, authentication was successful.
//   `req.user` contains the authenticated user.
//   res.redirect("/index");
// });

router.post("/login", (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", function (err, user, info) {
    //console.log(req);
    //console.log(user);
    if (err) {
      //console.log("cp1");
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: "No user found" });
    }

    req.logIn(user, function (err) {
      console.log("cp1");
      if (err) {
        //console.log("cp3");
        return res.status(400).json({ errors: err });
      }
      return res.status(200).json({ success: `logged in ${user.id}` });
    });
  })(req, res, next);
});

module.exports = router;
