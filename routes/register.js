var express = require("express");
var login = "./views/login";
var router = express.Router();
var UserController = require("../controllers/UserController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("register");
});

// create a user
router.post("/register", UserController.create);

module.exports = router;
