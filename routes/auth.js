const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login", (req, res, next) => {
  //console.log(req.body);
  passport.authenticate("local", function (err, user, info) {
    console.log(req.user);
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
