var express = require("express");
var router = express.Router();
var DataController = require("../controllers/DataController");

// router.get("/", function (req, res, next) {
//   res.render("data");
// });

router.post("/new", DataController.create);
//list of users
router.get("/", DataController.read);
//updates
router.post("/edit/:id", DataController.update);
// delete
router.delete("/:id", DataController.delete);

module.exports = router;
