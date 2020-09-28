var express = require("express");
var router = express.Router();
const Special = require("../models/special");

// ROUTE FOR READ
router.get("/", (req, res) => {
  Special.find((err, docs) => {
    if (err) throw err;
    // console.log(docs);
    res.render("home", {
      teams: docs,
    });
  }).catch((err) => {
    console.log(err);
  });
});
module.exports = router;
