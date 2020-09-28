var express = require("express");
var router = express.Router();
var UserController = require("../controllers/UserController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", UserController.create);

router.get("/all", UserController.read);

router.get("/edit/:id", UserController.update);

router.get("/:id", UserController.update);
module.exports = router;
