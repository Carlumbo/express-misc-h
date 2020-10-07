const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res, next) => {
  console.log(req, res);
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      //console.log("cp1");
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      console.log("cp2");
      return res.status(400).json({ errors: "No user found" });
    }

    req.logIn(user, function (err) {
      if (err) {
        //console.log("cp3");
        return res.status(400).json({ errors: err });
      }
      return res.status(200).json({ success: `logged in ${user.id}` });
    });
  })(req, res, next);
});

module.exports = router;
