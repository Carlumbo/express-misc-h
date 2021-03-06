var express = require("express");
var login = "./views/login";
var router = express.Router();
var UserController = require("../controllers/UserController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get('/logout', function (req,res, next) {
  //res.send("respond with a resource");
  if (req.session) {
    req.session.destroy()
    res.redirect("./login")
  }
})

router.get("/login", function (req, res, next) {
  res.render("login");
});
// create a user
router.post("/", UserController.create);

//list of users
router.get("/all", UserController.read);

//router.get("/login?/:email", UserController.read);

//updates
router.get("/edit/:id", UserController.update);

// delete
router.get("/:id", UserController.delete);
module.exports = router;
