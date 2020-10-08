var express = require("express");
var login = "./views/login";
var router = express.Router();
var UserController = require("../controllers/UserController");

function handleRedirect(req, res) {
  const url = "http://localhost:3000/index/";
  res.redirect(url);
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("register");
});
//
router.post("/register", function (req, res, next) {
  //console.log(req.body);
  UserController.create(req);
  return res.redirect("../index");
  // res.render("data");
});

module.exports = router;
