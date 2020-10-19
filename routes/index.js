var express = require("express");
var router = express.Router();
var DataController = require("../controllers/DataController");



router.post("/new", DataController.create);

router.get("/", DataController.read
);


router.get('/logout', function (req,res, next) {
    //res.send("respond with a resource");
    if (req.session) {
      req.session.destroy()
      res.redirect("./login")
    }
  })

router.post("/edit/:id", DataController.update);

router.delete("/:id", DataController.delete);

module.exports = router;
