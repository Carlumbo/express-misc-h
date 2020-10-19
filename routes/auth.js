const express = require("express");
const router = express.Router();
const passport = require("passport");
const { route } = require(".");

//     req.logIn(user, function (err) {
//       console.log("cp1");
//       if (err) {
//         //console.log("cp3");
//         return res.status(400).json({ errors: err });
//       }
//       return res.status(200).json({ success: `logged in ${user.id}` });
//     });
//   })(req, res, next);
// });

module.exports = router;
