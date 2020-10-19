var express = require("express");
var router = express.Router();
var DataController = require("../controllers/DataController");



router.post("/new", DataController.create);

router.get("/", DataController.read);

router.post("/edit/:id", DataController.update);

router.delete("/:id", DataController.delete);

module.exports = router;
