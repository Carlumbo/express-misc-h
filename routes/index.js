var express = require("express");
var router = express.Router();
var DataController = require("../controllers/DataController");

// router.get("/", function (req, res, next) {
//   res.render("data");
// });

router.post("/new", DataController.create);
//list of users
// if (logged_in) {
router.get("/", DataController.read);
// } else {
//   router.get("/", function (req, res, next) {
//     res.send("Please Login");
//   });
// }
//updates
router.post("/edit/:id", DataController.update);
// delete
router.delete("/:id", DataController.delete);

module.exports = router;
